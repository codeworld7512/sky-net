/** @format */

import React from "react";
import { Container, Grid, Box } from "@mui/material";
import { useTranslation } from "react-i18next";
import FlexBetween from "@/components/FlexBetween";
import i18n from "i18next";

function LandingBody() {
  const { t } = useTranslation();

  return (
    <Container>
      <Grid container>
        <Grid item xs={12}>
          <Container>
            <Grid container>
              <Box item xs={12}>
                <h2 className="slidefontsmallheading">
                  {t("home_right_talent")}
                </h2>
              </Box>
            </Grid>
            <Grid container>
              <Grid item xs={12} className="pt-2">
                <h1 className="slidefont display-1">{t("home_heading")}</h1>
              </Grid>
            </Grid>
            <Grid container>
              <Grid item xs={12} className="pt-4">
                <h5 className="slidefontcopy">{t("home_subheading")}</h5>
              </Grid>
            </Grid>
            <Grid container>
              <Grid item xs={12} className="pt-4 text-nowrap">
                <a href="/electrical">
                  <button
                    type="button"
                    className="button slidefontsmallheading"
                  >
                    {t("home_button1")}
                  </button>
                </a>
                <a href="/job">
                  <button
                    type="button"
                    className="button mx-3 slidefontsmallheading"
                  >
                    {t("home_button2")}
                  </button>
                </a>
              </Grid>
            </Grid>

            <Grid container className="pt-5 rowtop mt-5">
              <Grid item xs={4}>
                <Container className="card carddone">
                  <Grid container>
                    <Grid item xs={12} align="center">
                      <h1 className="slidefontothernumbers display-5">15+</h1>
                    </Grid>
                  </Grid>
                  <Grid container>
                    <Grid item xs={12} align="center" className="text-nowrap">
                      <span className="slidefontcopy">
                        {t("home_experience")}
                      </span>
                    </Grid>
                  </Grid>
                </Container>
              </Grid>
              <Grid item xs={4}>
                <Container className="card carddone">
                  <Grid container>
                    <Grid item xs={12} align="center">
                      <span className="slidefontothernumbers display-5">
                        8+
                      </span>
                    </Grid>
                  </Grid>
                  <Grid container>
                    <Grid item xs={12} align="center">
                      <span className="slidefontcopy">
                        {t("home_operations")}
                      </span>
                    </Grid>
                  </Grid>
                </Container>
              </Grid>
              <Grid item xs={4}>
                <Container className="card carddone">
                  <Grid container>
                    <Grid item xs={12} align="center">
                      <span className="slidefontothernumbers display-5">
                        10 000+
                      </span>
                    </Grid>
                  </Grid>
                  <Grid container>
                    <Grid item xs={12} align="center">
                      <span className="slidefontcopy">{t("home_hours")}</span>
                    </Grid>
                  </Grid>
                </Container>
              </Grid>
            </Grid>
          </Container>
        </Grid>
        <Grid item xs={12} md={4} className="d-none d-md-block">
          <Box
            component="div"
            className="cardhomepage container py-4 text-dark border p-3"
          >
            <h3 className="slidefontother py-3">{t("snow_paring")}</h3>
            <p className="slidefontcopy just">{t("snow_response")}</p>
            <form
              action="https://formbold.com/s/9Epr6"
              method="POST"
              id="contactForm"
            >
              <div class="mb-3">
                <label for="name...>" class="form-label slidefontcopy">
                  {t("name")}
                </label>
                <input
                  type="text"
                  class="form-control"
                  id="name"
                  name="name"
                  required
                />
              </div>
            </form>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
}

export default LandingBody;
