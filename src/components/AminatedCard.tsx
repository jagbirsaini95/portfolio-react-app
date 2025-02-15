import { Card, styled } from "@mui/material";

// Styled Card with CSS animations
export const AnimatedCard = styled(Card)<{ customstyle?: object }>(({ customstyle }) => ({
    ...customstyle,
    margin: "25px",
    borderRadius: 12,
    boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
    transition: "transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out",
    "&:hover": {
        transform: "scale(1.05)",
        boxShadow: "0px 6px 15px rgba(0, 0, 0, 0.2)",
    },
}));