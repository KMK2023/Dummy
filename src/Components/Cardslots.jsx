import { useState } from 'react';
// import './BigPlace.css'

const Place = [
    { id: 1, name: 'Location1', DateMonthYear: '00-00-2023', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/TheCheethplace.jpg/320px-TheCheethplace.jpg' },
    { id: 2, name: 'Location2', DateMonthYear: '06-08-2022', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d6/Mountain_Lion_in_Glacier_National_Park.jpg/480px-Mountain_Lion_in_Glacier_National_Park.jpg' },
    { id: 3, name: 'Location3', DateMonthYear: '09-07-2012', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Standing_jaguar.jpg/480px-Standing_jaguar.jpg' },
    { id: 4, name: 'Location4', DateMonthYear: '12-08-2023', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/70/African_leopard_male_%28cropped%29.jpg/480px-African_leopard_male_%28cropped%29.jpg' },
    { id: 5, name: 'Location5', DateMonthYear: '11-01-2000', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/Lion_waiting_in_Namibia.jpg/480px-Lion_waiting_in_Namibia.jpg' },
    { id: 6, name: 'Location6', DateMonthYear: '30-06-2012', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Irbis4.JPG/480px-Irbis4.JPG' },
    { id: 7, name: 'Location7', DateMonthYear: '03-03-2011', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Walking_tiger_female.jpg/480px-Walking_tiger_female.jpg' },
];

function SinglePlaces({id, name, DateMonthYear, image, onRemovePlace}) {
    return (
        <li>
            <img src={image} width="400" alt={name} />
            <h3>{name}</h3> 
            <em>({DateMonthYear})</em>&nbsp;
            <a onClick={() => onRemovePlace(id)}>Delete</a>
        </li>
    )
}   

function AddPlaceForm({onAddplace}) {
    const [name, setName] = useState('');
    const [DateMonthYear, setDateMonthYear] = useState('');
    const [imageURL, setImageURL] = useState('');

    const handleAddplace = (e) => {
        e.preventDefault();
        onAddplace({name, DateMonthYear, image: imageURL});
    }

    return (
        <form onSubmit={handleAddplace}>
            <h3>Add New Memory</h3>
            <label>
                Name: 
                <input name="name" value={name} onChange={(e) => setName(e.target.value)} />
            </label><br/>
            <label>
                Date: 
                <input name="DateMonthYear" value={DateMonthYear} onChange={(e) => setDateMonthYear(e.target.value)} />
            </label><br/>      
            <label>
                Image URL: 
                <input name="imageURL" value={imageURL} onChange={(e) => setImageURL(e.target.value)} />
            </label><br/>
            <label>
            Image File:
                <input type="file" accept="image/*" onChange={(e) => setImageFile(e.target.files[0])} />
            </label><br/>

            <button>Add Place</button>          
        </form>
    )
}

function Cardslots() {

    const [currentPlace, setcurrentPlace] = useState(Place);

    const handleSortPlace = () => {
        let newPlace = [...currentPlace];
        newPlace.sort((place1, place2) => place1.name < place2.name ? -1 : 1 );
        setcurrentPlace(newPlace);
    }

    const handleReversePlace = () => {
        let newPlace = [...currentPlace];
        newPlace.reverse();
        setcurrentPlace(newPlace);
    }    

    const handleFilterPlace = () => {
        let newPlace = currentPlace.filter(place => place.DateMonthYear.startsWith('Panthera'));
        setcurrentPlace(newPlace);
    }

    const handleResetPlace = () => {
        setcurrentPlace(Place);
    }    

    const handleAddplace = (newplace) => {
        //newplace.id = currentPlace.length + 1; // not reliable, especially when deleting
        newplace.id = currentPlace.reduce((maxId, place) => Math.max(maxId, place.id), 0) + 1; // more reliable
        setcurrentPlace([...currentPlace, newplace]);
    }

    // const handleRemoveplace = (deleteId) => {
    //     let newPlace = currentPlace.filter(place => place.id != deleteId);
    //     setcurrentPlace(newPlace);
    // }


    const handleRemoveplace = (deleteId) => {
        const shouldDelete = window.confirm("Are you sure you want to delete this place?");
      
        if (shouldDelete) {
          let newPlace = currentPlace.filter(place => place.id !== deleteId);
          setcurrentPlace(newPlace);
        }
      };
      

    const placeList = currentPlace.map(place => (
        <SinglePlaces name={place.name} DateMonthYear={place.DateMonthYear} key={place.id} image={place.image} id={place.id} onRemovePlace={handleRemoveplace}/>
    ))
    
    return (
        <>
        <h2>Places I have visited</h2>
            <ul>{placeList}</ul>

            
        <div className="BigPlace" style={{ display:'grid',flexDirection:'row',alignItems:'left' }}>
            
            <div>
                <button onClick={handleSortPlace}>Sort Alphabetically</button>
                <button onClick={handleReversePlace}>Reverse List</button>
            </div>
            <div>
                <button onClick={handleFilterPlace}>Filter Places</button>
                <button onClick={handleResetPlace}>Reset List</button>
            </div>
            <AddPlaceForm onAddplace={handleAddplace}/>
        </div>
        </>
    )
    }

export default Cardslots;