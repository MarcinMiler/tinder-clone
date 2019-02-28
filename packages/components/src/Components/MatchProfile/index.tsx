import * as React from 'react'

import {
    Container,
    ProfileImage,
    Name,
    Content,
    Row,
    JobIcon,
    Text,
    BookIcon,
    Description
} from './style'

interface Props {
    url: string
    name: string
    age: number
    job?: string
    education?: string
    description?: string
}

export const MatchProfile: React.FC<Props> = ({
    url,
    name,
    age,
    job,
    education,
    description
}) => (
    <Container>
        <ProfileImage url={url} />

        <Content>
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
        </Content>
    </Container>
)
