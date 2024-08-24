import withPWA from "next-pwa";

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // 추가적인 설정을 여기에 작성할 수 있습니다.
};

export default withPWA({
  dest: "public", // 서비스 워커와 캐시가 저장될 경로
  disable: process.env.NODE_ENV === "development", // 개발 모드에서 PWA 비활성화
  register: true, // 서비스 워커 자동 등록
  skipWaiting: true, // 새로운 서비스 워커가 설치되면 대기하지 않고 바로 활성화
  ...nextConfig, // 기본 설정을 포함시킴
});
