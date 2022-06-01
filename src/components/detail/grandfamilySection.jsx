import { FaMapMarkerAlt } from "react-icons/fa";

export default function GrandFamily({ title }) {
    return (
        <section className="container">
            <h2 className="main-title-head">{title}</h2>
            <span class="location-check"><FaMapMarkerAlt className="map-main-icon" />Ohio St. South Gate, California</span>
        </section>
    )
}