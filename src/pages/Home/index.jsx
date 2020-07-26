import React, { useState, useEffect } from 'react';

import { GiChampions } from 'react-icons/gi';
import { FiSearch } from 'react-icons/fi';
import { Card, Spinner, Accordion, InputGroup, FormControl } from 'react-bootstrap';

import loading from '../../assets/loading.gif';

import api from '../../services/api';

import './styles.css';

const Home = () => {
    const [participants, setParticipants] = useState([]);
    const [query, setQuery] = useState('');

    useEffect(() => {
        api.get(`wars`).then(res => {
            const players = res.data.participants.sort((a, b) => b.total - a.total);

            setParticipants(players);
        });
    }, []);

    function handleChangeValue() {
        let input = document.querySelector('#query').value;

        setQuery(input);
    }

    return (
        <div id="page-home">
            <div className="content">
                <header>
                    <h2>Kings of Clash</h2>
                </header>
            </div>

            <main className="main-home">
                <div className="header-content">
                    <h2>Campeonato</h2>
                    <GiChampions color="#FFF" size={50} />
                </div>

                {participants.length !== 0 &&
                    <div className="search-participant">
                        <InputGroup className="mb-3">
                            <InputGroup.Prepend>
                                <InputGroup.Text id="basic-addon1">
                                    <FiSearch />
                                </InputGroup.Text>
                            </InputGroup.Prepend>
                            <FormControl
                                name="query"
                                id="query"
                                onChange={handleChangeValue}
                                placeholder="Nome"
                                aria-label="Nome"
                                aria-describedby="basic-addon1"
                            />
                        </InputGroup>
                    </div>
                }

                <div className="table-content">
                    {participants.length === 0 &&
                        <div className="loading">
                            <img src={loading} width="50" alt="loading" />
                            <Spinner size="sm" animation="border" />
                        </div>
                    }

                    {participants.filter(p => p.participant.name.toLowerCase().includes(query.toLowerCase())).map((player, index) => (
                        <Accordion key={player.participant.tag} defaultActiveKey="1">
                            <Card>
                                <Accordion.Toggle as={Card.Header} eventKey={index + 1 === 1 ? "1" : "0"} className={
                                    index + 1 <= 10 ? "blue" : index + 1 > 10 && index + 1 <= 20 ? "green" : index + 1 > 20 && index + 1 <= 30 ? "yellow" : "red"
                                }>
                                    <span>
                                        {index + 1} - {player.participant.name} - {player.participant.tag}
                                    </span>
                                    <span>{player.total}</span>
                                </Accordion.Toggle>
                                <Accordion.Collapse eventKey={index + 1 === 1 ? "1" : "0"}>
                                    <Card.Body>
                                        <Card.Text>Coletas: {player.collections}</Card.Text>
                                        <Card.Text>War / Part: {player.wars_participated}</Card.Text>
                                        <Card.Text>Guerra: {player.wars_participated}/10 - {player.matches}</Card.Text>
                                        <Card.Text>Penalidades: {player.punishment}</Card.Text>
                                        <Card.Text>Derrotas: {player.defeats}</Card.Text>
                                        <Card.Text>Vitórias: {player.wins}</Card.Text>
                                        <Card.Text>Bônus: {player.bonus}</Card.Text>
                                        <Card.Text>Penalidades: {player.penalties}</Card.Text>
                                    </Card.Body>
                                </Accordion.Collapse>
                            </Card>
                        </Accordion>
                    ))}
                </div>
            </main>
        </div >
    );
};

export default Home;