import React from "react";
import Card from "react-bootstrap/Card";
import GaugeB from "./GaugeB";

function ProjectCardsB() {
    return (
        <Card className="project-card-view">
            <Card.Body>
                <Card.Title>Suhu Air</Card.Title>
                {/* Menggunakan komponen GaugeB untuk menampilkan data suhu */}
                <GaugeB />
            </Card.Body>
        </Card>
    );
}

export default ProjectCardsB;
