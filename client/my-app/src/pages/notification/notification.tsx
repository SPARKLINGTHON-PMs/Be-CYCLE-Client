import React from "react";
import styles from "../../styles/Main.module.scss";
import NotificationCard from "@/components/Common/NotificationCard";
import NavBar from "@/components/Common/NavBar";
import { Text, VStack } from "@chakra-ui/react";


export default function Notification() {

  //  알림 메시지를 가져오는 로직
  const messages = [
    { message: "알림 메시지", date: "2021-09-01" },
    { message: "알림 메시지", date: "2021-09-02" },
    { message: "알림 메시지", date: "2021-09-03" },
  ]

  return (
    <div className={styles.container}>

      <VStack>
        <Text>요청들</Text>
        <VStack>
          {messages.map((msg, index) => (
            <NotificationCard key={index} message={msg.message} date={msg.date} />
          ))}

        </VStack>
      </VStack>
      <NavBar />
    </div>
  )
}