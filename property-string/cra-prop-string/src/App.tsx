import { useEffect } from 'react';

import { useForm } from 'react-hook-form';
import { propertyStringPathFactory } from 'property-string-path';

import { User } from './user.model';
import './App.css';

export const App = () => {
  const formKeys = propertyStringPathFactory<User>();
  const { register, watch } = useForm<User>();

  const lat = watch(formKeys('address.geo.lat'));

  useEffect(() => {
    console.log(lat);
  }, [lat]);

  return (
    <div className="App">
      <form>
        <input name={formKeys('address.geo.lat')} ref={register} />
      </form>
    </div>
  );
};
