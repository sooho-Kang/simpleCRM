import Berlin from "../assets/Berlin.jpg";
import Denver from "../assets/Denver.jpg";
import Helsinki from "../assets/Helsinki.jpg";
import Moscow from "../assets/Moscow.jpg";
import Nairobi from "../assets/Nairobi.jpg";
import Oslo from "../assets/Oslo.jpg";
import Professor from "../assets/Professor.jpg";
import Rio from "../assets/Rio.jpg";
import Tokyo from "../assets/Tokyo.jpg";
import ACTION from "../actions/actions";
const initialState = [
    {
        name: "Professor",
        koName: "교수",
        imageURL: Professor,
        actor: "Alvaro Morte",
        gender: "Male",
    },
    {
        name: "Tokyo",
        koName: "도쿄",
        imageURL: Tokyo,
        actor: "Úrsula Corberó,",
        gender: "Female",
    },
    {
        name: "Berlin",
        koName: "베를린",
        imageURL: Berlin,
        actor: "Pedro Alonso",
        gender: "Male",
    },
    {
        name: "Nairobi",
        koName: "나이로비",
        imageURL: Nairobi,
        actor: "Alba Flores",
        gender: "Female",
    },
    {
        name: "Rio",
        koName: "리우",
        imageURL: Rio,
        actor: "Miguel Herran",
        gender: "Male",
    },
    {
        name: "Moscow",
        koName: "모스크바",
        imageURL: Moscow,
        actor: "Paco Tous",
        gender: "Male",
    },
    {
        name: "Denver",
        koName: "덴버",
        imageURL: Denver,
        actor: "Jaime Lorente",
        gender: "Male",
    },
    {
        name: "Helsinki",
        koName: "헬싱키",
        imageURL: Helsinki,
        actor: "Darko Peric",
        gender: "Male",
    },
    {
        name: "Oslo",
        koName: "오슬로",
        imageURL: Oslo,
        actor: "Roberto Garcia",
        gender: "Male",
    },
];
//payload: { gender, name, koName, actor, file }
const charactersReducer = (state = initialState, action) => {
    const copiedState = [...state];
    switch (action.type) {
        case ACTION.ADD_CHARACTER:
            console.log(action.payload);
            copiedState.push({
                name: action.payload.name,
                koName: action.payload.koName,
                imageURL: action.payload.file,
                actor: action.payload.actor,
                gender: action.payload.gender,
            });
            console.log(action.payload.file);
            return copiedState;
        default:
            return copiedState;
    }
};

export default charactersReducer;
