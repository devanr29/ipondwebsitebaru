import React from "react";
import Card from "react-bootstrap/Card";
import GaugeC from "./GaugeC";

function ProjectCardsC() {
    return (
        <Card className="project-card-view">
            <Card.Body>
                <Card.Title>Kekeruhan Air</Card.Title>
                {/* Menggunakan komponen GaugeC untuk menampilkan data kekeruhan */}
                <GaugeC />
            </Card.Body>
        </Card>
    );
}

export default ProjectCardsC;
