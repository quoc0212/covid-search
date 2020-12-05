import { Dimmer, Loader, Segment } from 'semantic-ui-react';

import React from 'react';

const PageLoader = () => (
    <Segment>
        <Dimmer active inverted>
            {/* <Loader /> */}
        </Dimmer>
    </Segment>
)

export { PageLoader }