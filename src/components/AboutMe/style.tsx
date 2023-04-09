import { styled } from "@/styles/stitches.config";

export const AboutMeSection = styled("section", {
    background: "$grey1",
    padding: "$section 0",
    "@mobile": {
      padding: "$sectionMobile 0",
    }
});

export const AboutMeDivContent = styled("div", {
    paddingLeft: "1rem",
    maxWidth: "75rem",
    margin: "0 auto",
    display: "flex",
    flexDirection: "column",
    '& h1': {
        fontSize: 20,
        marginBottom: "4rem",
        color: "White"
    },
    '& p': {
        width: "70%",
        color: "$grey2",
        alignSelf: "center"
    }
})