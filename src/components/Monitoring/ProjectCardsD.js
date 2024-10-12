import React from "react";
import Card from "react-bootstrap/Card";
import HistoryChart from "./HistoryChart";

function ProjectCardsD() {
    return (
        <Card className="project-card-view-history">
            <Card.Body>
                <Card.Title>Data History pH</Card.Title>
                {/* Menggunakan komponen history untuk menampilkan data pH*/}
                <HistoryChart/>
            </Card.Body>
        </Card>
    );
}

export default ProjectCardsD;
