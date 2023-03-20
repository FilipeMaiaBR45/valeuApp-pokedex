import React, { useState, FormEvent, useEffect } from "react";
import axios from "axios";
//import { BrowserRouter } from 'react-router-dom';
import api from "./services/api";

import { FiSearch } from "react-icons/fi";

import Input from "./components/input";

import GlobalStyle from "./styles/global";
import {
    Section,
    LogoContent,
    Form,
    ButtonsContent,
    TypeButton,
    CardsContent,
    Cards,
} from "./styles/css";
import logo from "./assets/logo.png";
import pokeball from "./assets/pokeball.png";

//import Routes from './routes'

interface Pokemon {
    id: number;
    name: string;
    img: string;
    type: string[];
    height: string;
    weight: string;
}

const App = () => {
    const [newPokemon, setNewPokemon] = useState("");
    const [pokemons, setPokemons] = useState<Pokemon[]>([]);
    const [pokemonsView, setPokemonsView] = useState<Pokemon[]>([]);

    async function getPokemons() {
        const response = await api.get(
            "/Biuni/PokemonGO-Pokedex/master/pokedex.json"
        );

        const pokemon: Pokemon[] = response.data.pokemon;

        setPokemons(pokemon);
        setPokemonsView(pokemon);
    }

    useEffect(() => {
        getPokemons();
    }, []);

    async function handleFilterByNamePokemon(
        event: FormEvent<HTMLFormElement>
    ): Promise<void> {
        event.preventDefault();

        const pokemonsFilters: Pokemon[] = pokemons.filter((pokemon) => {
            return pokemon.name
                .toLowerCase()
                .includes(newPokemon.toLowerCase());
        });

        setPokemonsView(pokemonsFilters);
    }

    async function handleIsEmpty(): Promise<void> {
        if (newPokemon == "") {
            setPokemonsView(pokemons);
        }
    }

    async function handleFilterByType(
        event: any,
        newType: string
    ): Promise<void> {
        const pokemonsFilters: Pokemon[] = pokemons.filter((pokemon) => {
            return pokemon.type
                .join(",")
                .toLowerCase()
                .includes(newType.toLowerCase());
        });

        setPokemonsView(pokemonsFilters);
    }

    return (
        <>
            <Section>
                <LogoContent>
                    <img src={logo} alt="logo do pokemon" />
                    <h1>Uma Pokedex completa criada em React JS</h1>

                    <Form onSubmit={handleFilterByNamePokemon}>
                        <div className="flex">
                            <input
                                value={newPokemon}
                                onChange={(e) => setNewPokemon(e.target.value)}
                                onKeyUp={handleIsEmpty}
                                placeholder="Search a Pokemon"
                            />

                            <FiSearch />
                        </div>
                    </Form>

                    <div className="flex">
                        <img id="pokeball" src={pokeball} alt="pokeball" />
                        <h2>Filter by type</h2>
                    </div>
                </LogoContent>
            </Section>

            <Section>
                <ButtonsContent>
                    <TypeButton
                        onClick={(e) => handleFilterByType(e, "normal")}
                        className="normal"
                    >
                        NORMAL
                    </TypeButton>
                    <TypeButton
                        onClick={(e) => handleFilterByType(e, "fighting")}
                        className="fighting"
                    >
                        FIGHTING
                    </TypeButton>
                    <TypeButton
                        onClick={(e) => handleFilterByType(e, "flying")}
                        className="flying"
                    >
                        FLYING
                    </TypeButton>
                    <TypeButton
                        onClick={(e) => handleFilterByType(e, "flying")}
                        className="poison"
                    >
                        POISON
                    </TypeButton>
                    <TypeButton
                        onClick={(e) => handleFilterByType(e, "ground")}
                        className="ground"
                    >
                        GROUND
                    </TypeButton>
                    <TypeButton
                        onClick={(e) => handleFilterByType(e, "rock")}
                        className="rock"
                    >
                        ROCK
                    </TypeButton>
                    <TypeButton
                        onClick={(e) => handleFilterByType(e, "bug")}
                        className="bug"
                    >
                        {" "}
                        BUG
                    </TypeButton>
                    <TypeButton
                        onClick={(e) => handleFilterByType(e, "ghost")}
                        className="ghost"
                    >
                        GHOST
                    </TypeButton>
                    <TypeButton
                        onClick={(e) => handleFilterByType(e, "stell")}
                        className="stell"
                    >
                        STELL
                    </TypeButton>
                    <TypeButton
                        onClick={(e) => handleFilterByType(e, "fire")}
                        className="fire"
                    >
                        FIRE{" "}
                    </TypeButton>
                    <TypeButton
                        onClick={(e) => handleFilterByType(e, "water")}
                        className="water"
                    >
                        WATER{" "}
                    </TypeButton>
                    <TypeButton
                        onClick={(e) => handleFilterByType(e, "grass")}
                        className="grass"
                    >
                        GRASS{" "}
                    </TypeButton>
                    <TypeButton
                        onClick={(e) => handleFilterByType(e, "electric")}
                        className="electric"
                    >
                        ELECTRIC{" "}
                    </TypeButton>
                    <TypeButton
                        onClick={(e) => handleFilterByType(e, "psychic")}
                        className="psychic"
                    >
                        PSYCHIC{" "}
                    </TypeButton>
                    <TypeButton
                        onClick={(e) => handleFilterByType(e, "ice")}
                        className="ice"
                    >
                        ICE{" "}
                    </TypeButton>
                    <TypeButton
                        onClick={(e) => handleFilterByType(e, "dragon")}
                        className="dragon"
                    >
                        DRAGON{" "}
                    </TypeButton>
                    <TypeButton
                        onClick={(e) => handleFilterByType(e, "dark")}
                        className="dark"
                    >
                        DARK{" "}
                    </TypeButton>
                    <TypeButton
                        onClick={(e) => handleFilterByType(e, "fairy")}
                        className="fairy"
                    >
                        FAIRY{" "}
                    </TypeButton>
                    <TypeButton
                        onClick={(e) => handleFilterByType(e, "shadow")}
                        className="shadow"
                    >
                        SHADOW{" "}
                    </TypeButton>
                    <TypeButton
                        onClick={(e) => handleFilterByType(e, "unknown")}
                        className="unknown"
                    >
                        UNKNOWN
                    </TypeButton>
                </ButtonsContent>
            </Section>

            <Section>
                <CardsContent>
                    {pokemonsView.map((pokemon) => (
                        <Cards className={pokemon.type[0]} key={pokemon.id}>
                            <img
                                src={pokemon.img}
                                alt={`imagem do pokemon ${pokemon.name}`}
                            />
                            <h2>{pokemon.name}</h2>

                            <h3>
                                Type:{" "}
                                {pokemon.type.map((t, i) => {
                                    if (i == pokemon.type.length - 1) {
                                        return t;
                                    }

                                    return t + ", ";
                                })}
                            </h3>
                            <h3>Height: {pokemon.height}</h3>
                            <h3>Weight: {pokemon.weight}</h3>
                        </Cards>
                    ))}
                </CardsContent>
            </Section>
            <GlobalStyle />
        </>
    );
};

export default App;
