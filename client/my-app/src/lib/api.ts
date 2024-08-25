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

export async function fetchCategories() {
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
}
