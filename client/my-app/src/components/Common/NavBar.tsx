import React from "react";
import { Box, Button } from "@chakra-ui/react";
import styles from "../../styles/Main.module.scss"; // SCSS Module import

export default function NavBar() {

    return (
      <Box>
        <footer>
          <Button>메인</Button>
          <Button>교환</Button>
          <Button>알림</Button>
          <Button>마이 페이지</Button>
        </footer>
      </Box>


    );
}

