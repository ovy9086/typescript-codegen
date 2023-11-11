import { getApiDocs } from "../../lib/swagger";
import "swagger-ui-react/swagger-ui.css";
import ReactSwagger from "./SwaggerUI";

export default async function IndexPage() {
  const spec = await getApiDocs();
  return (
    <section className="container">
      <ReactSwagger spec={spec} />
    </section>
  );
}
