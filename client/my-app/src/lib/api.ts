// client/my-app/src/lib/api.ts

interface SignupData {
  name: string;
  telNum: string; // phone -> telNum으로 수정
  address: string;
  categories: { id: number; name: string }[];
  latitude: number;
  longitude: number;
  pwd: string;
}

interface UserLoginRequest {
  loginId: string;
  pwd: string;
}

// 회원가입 API 호출
export async function signupUser(data: SignupData) {
  try {
    console.log(data);
    const response = await fetch("http://localhost:8080/users/join", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || "회원가입에 실패했습니다.");
    }
  } catch (error) {
    console.error("Failed to signup:", error);
    throw error;
  }
}

// 카테고리 조회 API 호출
export async function fetchCategories() {
  try {
    const response = await fetch("http://localhost:8080/users/categories", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      throw new Error("Failed to fetch categories");
    }

    return await response.json();
  } catch (error) {
    console.error("Failed to fetch categories:", error);
    throw error;
  }
}

// 로그인 API 호출
export async function loginUser(data: UserLoginRequest) {
  console.log(data);
  try {
    const response = await fetch("http://localhost:8080/users/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
      credentials: "include", // 쿠키를 요청에 포함시킵니다.
    });

    console.log(data);
    if (!response.ok) {
      throw new Error("로그인에 실패했습니다.");
    }

    // return await response.json();
  } catch (error) {
    console.error("Failed to login:", error);
    throw error;
  }
}
