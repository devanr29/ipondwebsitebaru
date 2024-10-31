import React from "react";
import Card from "react-bootstrap/Card";
import HistoryChartB from "./HistoryChartB";

function ProjectCardsE() {
    return (
        <Card className="project-card-view-history">
            <Card.Body>
                <Card.Title>Data History Suhu</Card.Title>
                {/* Menggunakan komponen history untuk menampilkan data suhu */}
                <HistoryChartB/>
            </Card.Body>
        </Card>
    );
}

export default ProjectCardsE;
