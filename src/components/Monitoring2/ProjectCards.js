import React from "react";
import Card from "react-bootstrap/Card";
import Gauge from "./Gauge";

function ProjectCards() {
    return (
        <Card className="project-card-view">
            <Card.Body>
                <Card.Title>pH</Card.Title>
                {/* Menggunakan komponen Gauge untuk menampilkan data pH */}
                <Gauge />
            </Card.Body>
        </Card>
    );
}

export default ProjectCards;
