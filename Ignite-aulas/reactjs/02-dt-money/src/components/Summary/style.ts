import styled from 'styled-components'
import { lighten } from 'polished'

export const Container = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 2rem;
    margin-top: -10rem;
`;

const colors = {
    green: "#33CC95",
    red: "#E52E40"
}

const totalColor = {
    green: lighten(0.15, colors.green),
    red: lighten(0.15, colors.red)
}


export const ContainerDiv = styled.div `

    background: var(--shape);
    padding: 1.5rem 2rem;
    border-radius: 0.25rem;
    color: var(--text-title);

    header {
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    strong {
        display: block;
        margin-top: 1rem;
        font-size: 2rem;
        font-weight: 500;
        line-height: 3rem;
    }

    &.background-highlight-green {
        background: ${totalColor.green};
        color: #FFF;
    }

    &.background-highlight-red {
        background: ${totalColor.red};
        color: #FFF;
    }
`;