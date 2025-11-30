import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { ArrowLeft } from 'react-bootstrap-icons';
import './Position.css';

type Position = {
    id: number;
    title: string;
    manager: string;
    deadline: string;
    status: 'Abierto' | 'Contratado' | 'Cerrado' | 'Borrador';
};

type InterviewStep = {
    id: number;
    name: string;
    orderIndex: number;
};

type CandidateApplication = {
    id: number;
    candidateId: number;
    firstName: string;
    lastName: string;
    currentInterviewStep: number;
    averageScore: number;
};

// Datos mockeados de posiciones
const mockPositions: Position[] = [
    { id: 1, title: 'Senior Backend Engineer', manager: 'John Doe', deadline: '2024-12-31', status: 'Abierto' },
    { id: 2, title: 'Junior Android Engineer', manager: 'Jane Smith', deadline: '2024-11-15', status: 'Contratado' },
    { id: 3, title: 'Product Manager', manager: 'Alex Jones', deadline: '2024-07-31', status: 'Borrador' }
];

// Datos mockeados de las fases del proceso de reclutamiento
const mockInterviewSteps: InterviewStep[] = [
    { id: 1, name: 'Screening', orderIndex: 1 },
    { id: 2, name: 'Entrevista Técnica', orderIndex: 2 },
    { id: 3, name: 'Entrevista Manager', orderIndex: 3 },
    { id: 4, name: 'Oferta', orderIndex: 4 },
    { id: 5, name: 'Contratado', orderIndex: 5 }
];

// Datos mockeados de candidatos en diferentes fases del proceso
const mockCandidateApplications: CandidateApplication[] = [
    { id: 1, candidateId: 1, firstName: 'Ana', lastName: 'García', currentInterviewStep: 1, averageScore: 8.5 },
    { id: 2, candidateId: 2, firstName: 'Carlos', lastName: 'Martínez', currentInterviewStep: 1, averageScore: 7.2 },
    { id: 3, candidateId: 3, firstName: 'María', lastName: 'López', currentInterviewStep: 2, averageScore: 9.0 },
    { id: 4, candidateId: 4, firstName: 'Juan', lastName: 'Rodríguez', currentInterviewStep: 2, averageScore: 8.3 },
    { id: 5, candidateId: 5, firstName: 'Laura', lastName: 'Fernández', currentInterviewStep: 2, averageScore: 7.8 },
    { id: 6, candidateId: 6, firstName: 'Pedro', lastName: 'Sánchez', currentInterviewStep: 3, averageScore: 8.7 },
    { id: 7, candidateId: 7, firstName: 'Sofia', lastName: 'Torres', currentInterviewStep: 3, averageScore: 9.2 },
    { id: 8, candidateId: 8, firstName: 'Diego', lastName: 'Ramírez', currentInterviewStep: 4, averageScore: 8.9 },
    { id: 9, candidateId: 9, firstName: 'Elena', lastName: 'Castro', currentInterviewStep: 5, averageScore: 9.5 },
    { id: 10, candidateId: 10, firstName: 'Miguel', lastName: 'Vargas', currentInterviewStep: 5, averageScore: 9.1 }
];

const Position: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    
    // Buscar la posición correspondiente al id
    const position = mockPositions.find(pos => pos.id === Number(id));

    // Función para obtener candidatos por fase
    const getCandidatesByStep = (stepId: number): CandidateApplication[] => {
        return mockCandidateApplications.filter(candidate => candidate.currentInterviewStep === stepId);
    };

    // Función para renderizar círculos de rating (convierte score de 0-10 a 0-5 círculos)
    const renderRatingCircles = (score: number) => {
        const maxCircles = 5;
        const filledCircles = Math.round((score / 10) * maxCircles);
        
        return (
            <div className="candidate-rating">
                {Array.from({ length: maxCircles }).map((_, index) => (
                    <div
                        key={index}
                        className={`rating-circle ${index < filledCircles ? '' : 'empty'}`}
                    />
                ))}
            </div>
        );
    };

    // Si no se encuentra la posición, mostrar mensaje
    if (!position) {
        return (
            <div className="position-container">
                <div style={{ textAlign: 'center' }}>
                    <h2>Posición no encontrada</h2>
                    <div style={{ marginTop: '20px' }}>
                        <Link to="/positions" style={{ textDecoration: 'none', color: '#333' }}>
                            <ArrowLeft size={20} style={{ marginRight: '8px' }} />
                            Volver al listado de posiciones
                        </Link>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="position-container">
            {/* Encabezado */}
            <div className="position-header">
                <Link to="/positions" className="position-back-arrow">
                    <ArrowLeft size={24} />
                </Link>
                <h1 className="position-title">{position.title}</h1>
            </div>
            
            {/* Pipeline - Columnas del proceso de reclutamiento */}
            <div className="pipeline-container">
                {mockInterviewSteps.map((step) => {
                    const candidates = getCandidatesByStep(step.id);
                    return (
                        <div key={step.id} className="pipeline-column">
                            <h2 className="pipeline-column-title">{step.name}</h2>
                            <div className="pipeline-column-content">
                                {candidates.length === 0 ? (
                                    <div className="empty-state">
                                        Sin candidatos
                                    </div>
                                ) : (
                                    candidates.map((candidate) => (
                                        <div key={candidate.id} className="candidate-card">
                                            <div className="candidate-name">
                                                {candidate.firstName} {candidate.lastName}
                                            </div>
                                            {renderRatingCircles(candidate.averageScore)}
                                        </div>
                                    ))
                                )}
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default Position;

