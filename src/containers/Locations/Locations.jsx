import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import getLocations from "../../api/getLocations";
import LocationFilters from "../../components/Filters/LocationFilters";
import LocationField from "../../components/LocationField/LocationField";
import Loader from "../../components/UI/Loader/Loader";
import { setLocationPages } from "../../store/locations/actions";
import styles from "./Locations.module.scss";

const Locations = () => {
  const [locations, setLocations] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const dispatch = useDispatch();
  const currentPage = useSelector(
    (state) => state.locations.currentLocationPage
  );
  const currentQuery = useSelector(
    (state) => state.locations.currentLocationQuery
  );
  useEffect(() => {
    setIsLoading(true);
    getLocations(currentPage, currentQuery).then((res) => {
      setLocations(res.results);
      if (res.info) {
        dispatch(setLocationPages(res.info.pages));
      }
      setIsLoading(false);
    });
  }, [currentPage, currentQuery, dispatch]);
  return (
    <div className={styles.Locations}>
      <div className="container">
        {isLoading && <Loader />}
        <div className="flex-row">
          <LocationFilters />
          <LocationField locations={locations} />
        </div>
      </div>
    </div>
  );
};

export default Locations;
