import { useNavigate } from "react-router-dom";
import Portal from "../portal";

export default function PortalPage() {
  const navigate = useNavigate();
  /* Pass the navigate function to the Portal component */
  return <Portal onClose={() => navigate("/home")} />;
}
