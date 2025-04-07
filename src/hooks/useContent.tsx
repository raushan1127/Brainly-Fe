import { useEffect, useState } from "react";
import axios from "axios";
import { BACKEND_URL } from "../config";


export  function useContent() {

    const [contents, setContents] = useState([]);

    useEffect(() =>
    {
    const response = axios.get(BACKEND_URL+ "/api/v1/content", {
        headers: {
            "Authorization" : localStorage.getItem("token");
        }
    })
      .then((response) => {

        setContents(response.data.content)

      })
    },[])

}