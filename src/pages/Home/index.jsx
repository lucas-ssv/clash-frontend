import React, { useState, useEffect } from 'react';

import { GiChampions } from 'react-icons/gi';
import { GoWatch } from 'react-icons/go';
import { Card } from 'react-bootstrap';

import { WhatsappShareButton } from 'react-share';
import api from '../../services/api';

import './styles.css';

const Home = () => {
    const [players, setPlayers] = useState();

    useEffect(() => {
        api.get('currentwar').then(res => {
            console.log(res);
        });
    }, []);

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
                    <GiChampions color="#FFFC00" size={50} />
                </div>

                <div className="table-content">
                    <Card>
                        <Card.Header>1º</Card.Header>
                        <Card.Body>
                            <Card.Text>Cartas ganhas: 1000</Card.Text>
                            <Card.Text>Batalhas jogadas: 3</Card.Text>
                            <Card.Text>Ganhas: 2</Card.Text>
                        </Card.Body>
                    </Card>
                </div>
            </main>
            <WhatsappShareButton
                className="button-whatsapp"
                size={32}
                color="blue"
                title="Confira minha posição"
                url="www.google.com.br"
            >
                <GoWatch size={24} />
            </WhatsappShareButton>
        </div>
    );
};

export default Home;