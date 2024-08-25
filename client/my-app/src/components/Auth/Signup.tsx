import React, { useState, useEffect } from "react";
import styles from "../../styles/Signup.module.scss";
import { useRouter } from "next/router";
import { signupUser, fetchCategories } from "@/lib/api";

export default function Signup() {
  const [name, setName] = useState("");
  const [telNum, setTelNum] = useState("010-"); // phone -> telNum으로 변경
  const [pwd, setPwd] = useState("");
  const [categories, setCategories] = useState<{ id: number; name: string }[]>(
    []
  );
  const [selectedCategories, setSelectedCategories] = useState<number[]>([]);
  const [latitude, setLatitude] = useState<number | null>(null);
  const [longitude, setLongitude] = useState<number | null>(null);
  const [error, setError] = useState<string | null>(null);

  const router = useRouter();

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setLatitude(position.coords.latitude);
          setLongitude(position.coords.longitude);
        },
        (error) => {
          console.error("Geolocation Error:", error);
          setError("현재 위치를 가져오지 못했습니다.");
        }
      );
    }

    // 서버에서 카테고리 목록을 가져옴
    const loadCategories = async () => {
      try {
        const data = await fetchCategories();
        setCategories(data);
      } catch (error) {
        console.error("Failed to fetch categories", error);
      }
    };

    loadCategories();
  }, []);

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value.replace(/[^0-9]/g, "");
    if (value.length > 3 && value.length <= 7) {
      value = value.slice(0, 3) + "-" + value.slice(3);
    } else if (value.length > 7) {
      value =
        value.slice(0, 3) + "-" + value.slice(3, 7) + "-" + value.slice(7);
    }
    setTelNum("010" + value.slice(3)); // phone -> telNum으로 변경
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (
      !name ||
      !telNum ||
      !pwd ||
      !latitude ||
      !longitude ||
      selectedCategories.length === 0
    ) {
      setError("모든 필드를 올바르게 입력해 주세요.");
      return;
    }

    try {
      const formattedPhone = telNum.replace(/-/g, "");

      const selectedCategoryObjects = selectedCategories
        .map((categoryId) => {
          const category = categories.find((c) => c.id === categoryId);
          return category ? { id: category.id, name: category.name } : null;
        })
        .filter((c): c is { id: number; name: string } => c !== null); // null 값을 필터링하고 타입을 확정

      await signupUser({
        name,
        telNum: formattedPhone, // phone -> telNum
        pwd,
        address: `${province} ${city}`,
        categories: selectedCategoryObjects, // categories 추가
        latitude,
        longitude,
      });

      router.push("/main");
    } catch (error) {
      setError("회원가입에 실패했습니다. 다시 시도해주세요.");
    }
  };

  const provinces = ["서울특별시", "경기도", "인천광역시"] as const;
  const cities = {
    서울특별시: ["종로구", "중구", "용산구"],
    경기도: ["파주시", "수원시", "성남시"],
    인천광역시: ["중구", "동구", "미추홀구"],
  } as const;

  const [province, setProvince] =
    useState<(typeof provinces)[number]>("서울특별시");
  const [city, setCity] = useState<(typeof cities)[typeof province][number]>(
    cities[province][0]
  );

  const handleProvinceChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedProvince = e.target.value as (typeof provinces)[number];
    setProvince(selectedProvince);
    setCity(cities[selectedProvince][0]);
  };

  const handleCityChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedCity = e.target
      .value as (typeof cities)[typeof province][number];
    setCity(selectedCity);
  };

  const handleCategoryChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    categoryId: number
  ) => {
    if (e.target.checked) {
      setSelectedCategories([...selectedCategories, categoryId]);
    } else {
      setSelectedCategories(
        selectedCategories.filter((id) => id !== categoryId)
      );
    }
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>회원가입</h1>
      <form onSubmit={handleSubmit} className={styles.form}>
        <label className={styles.label}>
          이름
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className={styles.input}
            placeholder="이름 입력"
          />
        </label>
        <label className={styles.label}>
          전화번호
          <input
            type="tel"
            value={telNum} // phone -> telNum으로 변경
            onChange={handlePhoneChange}
            required
            className={styles.input}
            placeholder="전화번호 입력"
            maxLength={13}
          />
        </label>
        <label className={styles.label}>
          비밀번호
          <input
            type="password"
            value={pwd}
            onChange={(e) => setPwd(e.target.value)}
            required
            className={styles.input}
            placeholder="비밀번호 입력"
          />
        </label>
        <label className={styles.label}>
          도
          <select
            value={province}
            onChange={handleProvinceChange}
            className={styles.input}
            required
          >
            {provinces.map((prov) => (
              <option key={prov} value={prov}>
                {prov}
              </option>
            ))}
          </select>
        </label>
        <label className={styles.label}>
          시
          <select
            value={city}
            onChange={handleCityChange}
            className={styles.input}
            required
          >
            {cities[province].map((c) => (
              <option key={c} value={c}>
                {c}
              </option>
            ))}
          </select>
        </label>
        <label className={styles.label}>
          관심사
          {categories.map((category) => (
            <div key={category.id}>
              <input
                type="checkbox"
                id={`category-${category.id}`}
                value={category.id}
                onChange={(e) => handleCategoryChange(e, category.id)}
              />
              <label htmlFor={`category-${category.id}`}>{category.name}</label>
            </div>
          ))}
        </label>
        {error && <p className={styles.error}>{error}</p>}
        <button type="submit" className={styles.button}>
          회원가입
        </button>
      </form>
    </div>
  );
}
