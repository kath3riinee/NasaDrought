import { lazy } from "react";

const Contact = lazy(() => import("../../components/ContactForm"));
const Container = lazy(() => import("../../common/Container"));
const ScrollToTop = lazy(() => import("../../common/ScrollToTop"));
const ContentBlock = lazy(() => import("../../components/ContentBlock"));

const Home = () => {
  return (
    <Container>
      <ScrollToTop />

      {/* === TerraShield Overview === */}
      <ContentBlock
        direction="right"
        title="TerraShield"
        icon="waving.svg"
        id="product"
        content={`
TerraShield predicts drought conditions up to a year in advance and provides
recommendations for the most resilient crops suited to local forecasts. It also
evaluates financial options to help farmers plan with confidence and stability.
By combining climate data, forecasting models, and financial analytics, TerraShield
enables farmers to make informed decisions that safeguard both their land and livelihoods.
`}
      />

      {/* === Our Mission === */}
      <ContentBlock
        direction="left"
        title="Our Mission"
        icon="product-launch.svg"
        id="mission"
        content={`
Our mission is to empower farmers with accurate, timely, and actionable drought insights.
By translating complex climate data into practical guidance, we help reduce uncertainty,
minimize losses, and strengthen agricultural resilience in an era of increasing climate volatility.
`}
      />

      {/* === About Us === */}
      <ContentBlock
        direction="right"
        title="About Us"
        icon="graphs.svg"
        id="about"
        content={`
Astral Control was founded to bridge the gap between science, technology, and sustainable farming.
We believe that access to predictive climate intelligence can transform how farmers make
decisions about planting, harvesting, and resource management. Our platform turns uncertainty
into clarity, allowing farmers to act early rather than react to loss.

Through collaboration with research organizations, agribusinesses, and governments,
we aim to deliver accessible and affordable forecasting tools to those most affected by climate risk.
When farmers are empowered with knowledge, entire communities benefit from increased stability
and opportunity.
`}
      />

      {/* === The Problem === */}
      <ContentBlock
        direction="left"
        title="The Problem"
        icon="graphs.svg"
        id="solutions"
        content={`
Each year, drought causes billions of dollars in agricultural losses across North America.
In the United States alone, more than $35 billion was lost during the 2012–2013 drought,
which affected over eighty percent of the country. Canadian and Mexican farmers face similar
challenges, with significant yield declines and growing financial pressure.

These recurring events highlight the fragility of the agricultural sector under changing
climate patterns. Many farmers are forced into debt cycles, relying on short-term loans to
replant without access to reliable forecasts or long-term adaptation tools.
`}
      />

      {/* === The Solution === */}
      <ContentBlock
        direction="right"
        title="The Solution"
        icon="developer.svg"
        id="solutions2"
        content={`
TerraShield breaks this cycle by merging advanced climate forecasting with practical
financial planning. Using satellite data from NASA, NOAA, and Environment Canada,
our platform predicts drought risk and provides localized insights on future conditions.
Based on these forecasts, the system recommends suitable crop types and evaluates the
viability of various loan and insurance options.

The goal is simple: To give farmers the information they need to plan ahead,
make confident decisions, and reduce financial vulnerability. By integrating both
climate intelligence and economic foresight, TerraShield acts as a foundation for
sustainable agricultural resilience.
`}
      />

      {/* === Consulting Services === */}
      <ContentBlock
        direction="left"
        title="Consulting Services"
        icon="waving.svg"
        id="consulting"
        content={`
Our consulting services extend the capabilities of TerraShield by offering direct support
to farmers, cooperatives, and regional partners. Through a subscription-based model,
users gain access to tailored forecasts, strategic recommendations, and real-time
advisory sessions. Each consultation is grounded in local climate data and economic analysis,
ensuring that every decision is both sustainable and financially sound.

Subscribers can also receive customized reports, access ongoing training sessions, and
participate in collaborative workshops that bridge science and practice. These services
help farming communities develop the technical understanding and resilience necessary
to navigate a changing climate with confidence.

Our current pricing model is designed for accessibility while supporting continued innovation:
Essential — $249 per year; Professional — $599 per year; Enterprise — $2,499 per year.
`}
      />

      {/* === Infrastructure & Growth === */}
      <ContentBlock
        direction="right"
        title="Infrastructure & Growth"
        icon="graphs.svg"
        id="infrastructure"
        content={`
The TerraShield platform is built to grow seamlessly with new data and demand.
Our models automatically retrain with regional climate inputs, improving precision
as additional information becomes available. We integrate continuously updated datasets
from satellite systems, weather stations, and field observations.

All operations are hosted through secure cloud infrastructure across AWS and Google Cloud,
allowing us to scale efficiently while maintaining performance and cost control.
By year five, TerraShield will be capable of processing over thirty terabytes of climate
and soil data, forming the backbone of a continental-scale drought prediction network.
`}
      />

      {/* === Performance Insights === */}
      <ContentBlock
        direction="left"
        title="Performance Insights"
        icon="product-launch.svg"
        id="performance"
        content={`
Farmers using TerraShield have achieved measurable improvements in both productivity
and financial stability. Early access to accurate drought forecasts allows for better
crop planning, resource management, and investment timing. On average, users can expect
significant reductions in losses, higher yields, and more efficient use of water and capital.

Our long-term projections indicate that by year five, TerraShield will serve more than
a quarter million farms across North America. Collectively, this network will help prevent
nearly one billion dollars in drought-related losses while strengthening the financial
resilience of the agricultural sector as a whole.
`}
      />

      {/* === Contact Section === */}
      <Contact
        title="Contact Information"
        id="contact"
        content={`
For partnership inquiries, collaborations, or technical support, please contact us directly.

Email: terrashield@gmail.com

`}
      />
    </Container>
  );
};

export default Home;
