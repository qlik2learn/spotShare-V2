import React from 'react';
import { useParams } from 'react-router-dom';

import PlaceList from '../components/PlaceList';


const DUMMY_PLACES = [
    {
        id:'p1',
        title:'Eiffel Tower',
        description:'The Eiffel Tower is a wrought iron tower that stands 1,063 ft (324 m) tall.',
        imageURL:'https://i.ibb.co/fNNY1sW/eiffel.jpg',
        address:'Champ de Mars, 5 Av. Anatole France, 75007 Paris, France',
        location:{
            lat:'48.8584',
            lng:'2.2945'
        },
        creator:'u1'
    },
    {
        id:'p2',
        title:'Louvre Museum',
        description:'Formerly a royal palace, the Louvre embraces eight centuries of French history',
        imageURL:'https://media.assettype.com/outlooktraveller/import/outlooktraveller/public/uploads/articles/explore/Untitled_design_-_2023-07-09T153839_374.jpg?w=1200&h=675&auto=format%2Ccompress&fit=max&enlarge=true',
        address:'Champ de Mars, 5 Av. Anatole France, 75007 Paris, France',
        location:{
            lat:'48.8606',
            lng:'2.3376'
        },
        creator:'u2'
    }
]
const UserPlaces = props => {
    const userId = useParams().userId;
    const loadedPlaces = DUMMY_PLACES.filter(place => place.creator === userId);
    return <PlaceList items={loadedPlaces}/>
};

export default UserPlaces;