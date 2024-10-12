import React from "react";
import Card from "react-bootstrap/Card";
import HistoryChartC from "./HistoryChartC";

function ProjectCardsF() {
    return (
        <Card className="project-card-view-history">
            <Card.Body>
                <Card.Title>Data History Kekeruhan</Card.Title>
                {/* Menggunakan komponen history untuk menampilkan data kekeruhan */}
                <HistoryChartC/>
            </Card.Body>
        </Card>
    );
}

export default ProjectCardsF;
