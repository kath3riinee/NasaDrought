import { useState } from "react";
import { Row, Col, Drawer } from "antd";
import { withTranslation, TFunction } from "react-i18next";
import { useHistory, useLocation } from "react-router-dom";
import Container from "../../common/Container";
import { SvgIcon } from "../../common/SvgIcon";
import { Button } from "../../common/Button";
import {
  HeaderSection,
  LogoContainer,
  Burger,
  NotHidden,
  Menu,
  CustomNavLinkSmall,
  Label,
  Outline,
  Span,
} from "./styles";

const Header = ({ t }: { t: TFunction }) => {
  const [visible, setVisibility] = useState(false);
  const history = useHistory();
  const location = useLocation();

  const toggleButton = () => setVisibility(!visible);

  const scrollOrNavigate = (id: string) => {
    // Navigate to home before scrolling if not already there
    if (location.pathname !== "/home") {
      history.push("/home");
      setTimeout(() => {
        const element = document.getElementById(id);
        element?.scrollIntoView({ behavior: "smooth" });
      }, 400);
    } else {
      const element = document.getElementById(id);
      element?.scrollIntoView({ behavior: "smooth" });
    }
    setVisibility(false);
  };

  const MenuItem = () => (
    <>
      {/* 1️⃣ TerraShield */}
      <CustomNavLinkSmall onClick={() => history.push("/heatmap")}>
        <Span>{t("TerraShield")}</Span>
      </CustomNavLinkSmall>

      {/* 2️⃣ Our Mission */}
      <CustomNavLinkSmall onClick={() => scrollOrNavigate("mission")}>
        <Span>{t("Our Mission")}</Span>
      </CustomNavLinkSmall>

      {/* 3️⃣ Solutions */}
      <CustomNavLinkSmall onClick={() => scrollOrNavigate("solutions")}>
        <Span>{t("Solutions")}</Span>
      </CustomNavLinkSmall>

      {/* 4️⃣ Consulting Services */}
      <CustomNavLinkSmall onClick={() => scrollOrNavigate("consulting")}>
        <Span>{t("Consulting Services")}</Span>
      </CustomNavLinkSmall>

      {/* 5️⃣ Infrastructure & Growth */}
      <CustomNavLinkSmall onClick={() => scrollOrNavigate("infrastructure")}>
        <Span>{t("Infrastructure & Growth")}</Span>
      </CustomNavLinkSmall>

      {/* 6️⃣ Performance Insights */}
      <CustomNavLinkSmall onClick={() => scrollOrNavigate("performance")}>
        <Span>{t("Performance Insights")}</Span>
      </CustomNavLinkSmall>

      {/* 7️⃣ Contact */}
      <CustomNavLinkSmall
        style={{ width: "180px" }}
        onClick={() => scrollOrNavigate("contact")}
      >
        <Span>
          <Button>{t("Contact")}</Button>
        </Span>
      </CustomNavLinkSmall>
    </>
  );

  return (
    <HeaderSection>
      <Container>
        <Row justify="space-between" align="middle">

          {/* ✅ Menu for desktop */}
          <NotHidden>
            <MenuItem />
          </NotHidden>

          {/* ✅ Burger for mobile */}
          <Burger onClick={toggleButton}>
            <Outline />
          </Burger>
        </Row>

        {/* ✅ Drawer for mobile menu */}
        <Drawer closable={false} open={visible} onClose={toggleButton}>
          <Col style={{ marginBottom: "2rem" }}>
            <Label onClick={toggleButton}>
              <Col span={12}>
                <Menu>Menu</Menu>
              </Col>
              <Col span={12}>
                <Outline />
              </Col>
            </Label>
          </Col>
          <MenuItem />
        </Drawer>
      </Container>
    </HeaderSection>
  );
};

// ✅ The default export (critical for Router)
export default withTranslation()(Header);
