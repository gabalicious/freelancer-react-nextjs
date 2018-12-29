export const getValidationSchemaFromFormResource = (resource) => {
    if(!resource) {
        return {};
    }

    const schema = resource.reduce(
        (result, parameters) => {
            const name = parameters.name;

            // console.log(result);

            if(parameters.rules) {
                return {
                    ...result,
                    [name]: parameters.rules,
                };
            }

            // If no rules set,
            // avoid setting rules
            return {
                ...result
            };
        },
        {}
    );

    // console.log(schema);

    return schema;
};

export const getValuesFromFormResource = (resource) => {
    if(!resource) {
        return {};
    }

    const values = resource.reduce(
        (result, parameters) => {
            const name = parameters.name;

            // console.log(result);

            return {
                ...result,
                [name]: parameters.value,
            };
        },
        {}
    );

    // console.log(values);

    return values;
};

export const updateFormResourceFromErrors = (resource, errors) => {
    const new_resource = resource.reduce(
        (result, parameters) => {
            const name = parameters.name;

            // console.log(result, name, parameters);

            return [
                ...result,
                {
                    ...parameters,
                    errors: errors.inner.filter(error => {
                            return name === error.path;
                        })
                        .map((error) => {
                            return error.message;
                        })
                },
            ];
        },
        []
    );

    return new_resource;
};
