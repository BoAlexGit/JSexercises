/*файл: ~/home/alex/js/react/star-db/src/components/hoc-helpers/with-swapi_service.js */
import React from 'react';
import { SwapiServiceConsumer } from '../swapi-service-context';

const withSwapiService = (Wrapped, mapMethodsToProps) => {

  return (props) => {
    return (
      <SwapiServiceConsumer>
        {
          (swapiService) => {
            const serviceProps = mapMethodsToProps(swapiService);

            return (
              <Wrapped {...props} {...serviceProps} />
            );
          }
        }
      </SwapiServiceConsumer>
    );
  }
};

export default withSwapiService;
