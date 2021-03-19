import React, { useState } from "react";
import { ShowBiography } from "./ShowBiography";
import  { sortingMethod } from "./SortingMethod";

export const MainBiography = () => {
    const header = "История Интернета";

    const biographyArr = [
        [1967, "Дональд Дэвис впервые продемонстрировал пакетную коммутацию"],
        [1972, "Роберт Эллиот Кан и Винтон Серф разработали стек протоколов TCP/IP"],
        [1969, "Была создана экспериментальная сеть, соединившая четыре узла (UCLA, UCSB, SRI, Университет штата Юта)"],
        [1980, "исследования британского учёного Тима Бернерса-Ли привели к созданию Всемирной паутины"],
        [1990, "Начиная с середины 1990-х годов Интернет имеет кардинальное влияние на культуру, торговлю и технологии"],
        [2010, "множество глобальных вопросов, связанных с защитой приватности, интернет-цензурой, кибертерроризмом и многим другим"],
    ];

    const [biography, setBiography] = useState(biographyArr);
    const [ascendYear, setAscendYear] = useState(true);
    const [ascendEvent, setAscendEvent] = useState(true);
    const [sortCriteria, setSortCriteria] = useState("");
    const [customSort, setCustomSort] = useState(true);

    const getSortedByYear = (data, ascend) => {
        const sortFunction = ascend ? (a, b) => b[0] - a[0] : (a, b) => a[0] - b[0];
        return [...data].sort(sortFunction);
    };

    const getSortedByEvent = (data, ascend) => {
        const sortFunction = ascend ? (a, b) => (a[1] >= b[1] ? -1 : 1) : (a, b) => (a[1] >= b[1] ? 1 : -1);
        return [...data].sort(sortFunction);
    };

    const handleYearClick = () => {
        const sortedBio = customSort ? sortingMethod(biography, ascendYear) : getSortedByYear(biography, ascendYear);

        setBiography(sortedBio);
        setAscendYear(!ascendYear);
        setSortCriteria("year");
        console.table(biography);
    };

    const handleEventClick = () => {
        setBiography(getSortedByEvent(biography, ascendEvent));
        setAscendEvent(!ascendEvent);
        setSortCriteria("event");
        console.table(biography);
    };

    const handleCustomSortCheck = (event) => {
        setCustomSort(event.target.checked);
    };

    return (
        <ShowBiography
        header={header}
        biography={biography}
        handleYearClick={handleYearClick}
        handleEventClick={handleEventClick}
        handleCustomSortCheck={handleCustomSortCheck}
        ascendYear={ascendYear}
        ascendEvent={ascendEvent}
        sortCriteria={sortCriteria}
        />
    );
};
