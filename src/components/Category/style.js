import styled from 'styled-components'

export const CategoryContainer = styled.div`
	width: 400px;
	height: 600px;
	display: flex;
	align-items: center;
  justify-content: center;
	margin: 0 7.5px 15px;
	&:hover {
		cursor: pointer;

	}
`
export const ImageBackgroud = styled.div`
	width: 100%;
	height: 100%;
	background-size: cover;
	background-position: center;
	&:hover {
		transform: scale(1.1);
		transition: transform 6s cubic-bezier(0.25, 0.45, 0.45, 0.95);
	}
`
