import { Link } from "react-router-dom";
import "./Card.css";

interface Props {
  Page: string;
  text: string;
}

export default function Card({ Page, text }: Props) {
  return (
      <Link to={Page} className="link">
        
          <h1 className="link_text">{text}</h1>

      </Link>
  );
}