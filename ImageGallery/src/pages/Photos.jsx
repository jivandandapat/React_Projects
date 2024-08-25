import axios from "axios";
import React, { useEffect, useState} from "react";
import { Link } from "react-router-dom";
import PhotoCard from "../components/PhotoCard";

import "./style.css";

export default function Photos() {
    const [allPhoto, setAllPhoto] = useState([]);
    const [isLoading, setLoading] = useState(true);
    const url = "https://api.slingacademy.com/v1/sample-data/photos?limit=20";

    useEffect(() => {
        async function fetchData() {
            try {
                const response = await axios.get(url);
                setAllPhoto(response.data.photos);
                setLoading(false);
            } catch (error) {
                alert(error.message);
            }
        }
        fetchData();
    }, []);

    return (
        <section className="photos-container">
            {isLoading ? (
               <p>Fetching Data</p>
            ) : (
                allPhoto.map((photo) => (
                    <Link key={photo.id} to={`/photos/${photo.id}`}>
                        <PhotoCard photo={photo} />
                    </Link>
                ))
            )}
        </section>
    );
}