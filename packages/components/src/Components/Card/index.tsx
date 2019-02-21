import * as React from 'react'

import { Container, Name, Text, Row, JobIcon, Description, BookIcon } from './style'

interface Props {
    url: string
    name: string
    age: number
    job: string
    education: string
    description: string
}

export const Card: React.FC<Props> = ({ url, name, age, job, education, description }) => (
    <Container url={url}>
        <Name>
            {name}, {age}
        </Name>

        {job && (
            <Row>
                <JobIcon />
                <Text>{job}</Text>
            </Row>
        )}

        {education && (
            <Row>
                <BookIcon />
                <Text>{education}</Text>
            </Row>
        )}

        <Description>{description}</Description>
    </Container>
)
