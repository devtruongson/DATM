import { Card, Col, Divider, Row, Typography } from 'antd';
import React from 'react';
const { Title } = Typography;

const CrewSection = () => {
    const leftColumnCrew = [
        { role: 'Director & Screenplay', name: 'Johan Doe' },
        { role: 'Presented by', name: 'Sandeep S' },
        { role: 'Producers', name: 'Farhan S' },
        { role: 'Story', name: 'Ajay S' },
        { role: 'Director of Photography', name: 'Akshay H' },
        { role: 'Production Designer', name: 'Johan Doe' },
        { role: 'Music Composer', name: 'Farhan S' },
        { role: 'VFX Supervisor', name: 'Shruti J' },
    ];

    const rightColumnCrew = [
        { role: 'Sound Design', name: 'Johan Doe' },
        { role: 'Stunt Choreography', name: 'Sandeep S' },
        { role: 'Additional Stunts', name: 'Farhan S' },
        { role: 'Dance Choreographers', name: 'Ajay S' },
        { role: 'Editor', name: 'Akshay H' },
        { role: 'Costume Designers', name: 'Johan Doe' },
        { role: 'Dialogues', name: 'Farhan S' },
        { role: 'Music Composer', name: 'Shruti J' },
    ];

    // eslint-disable-next-line react/prop-types
    const CrewItem = ({ role, name }) => (
        <div className="flex justify-between py-2">
            <div className="text-gray-600">{role}</div>
            <div className="text-gray-800 font-medium">{name}</div>
        </div>
    );

    return (
        <div className="bg-gray-50 py-12 px-4">
            <div className="max-w-5xl mx-auto">
                <div className="text-center mb-10">
                    <Title level={2} className="font-bold text-gray-800 m-0">
                        OUR CREW
                    </Title>
                    <div className="w-12 h-1 bg-red-500 mx-auto mt-2"></div>
                </div>
                <Row gutter={[24, 24]}>
                    {/* Left Column */}
                    <Col xs={24} md={12}>
                        <Card className="h-full shadow-sm">
                            {leftColumnCrew.map((crewMember, index) => (
                                <React.Fragment key={`left-${index}`}>
                                    <CrewItem role={crewMember.role} name={crewMember.name} />
                                    {index < leftColumnCrew.length - 1 && <Divider className="my-1" />}
                                </React.Fragment>
                            ))}
                        </Card>
                    </Col>
                    <Col xs={24} md={12}>
                        <Card className="h-full shadow-sm">
                            {rightColumnCrew.map((crewMember, index) => (
                                <React.Fragment key={`right-${index}`}>
                                    <CrewItem role={crewMember.role} name={crewMember.name} />
                                    {index < rightColumnCrew.length - 1 && <Divider className="my-1" />}
                                </React.Fragment>
                            ))}
                        </Card>
                    </Col>
                </Row>
            </div>
        </div>
    );
};

export default CrewSection;
