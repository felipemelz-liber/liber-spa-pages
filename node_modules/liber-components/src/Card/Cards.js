import styled from 'styled-components';
import { wrapper } from '../Util/VersionWrapper';

import * as v1 from './Card';
import * as v2 from './CardV2';

export const { CardListItem, CardListContent, CardTitle } = v1;

export const { InnerCard, InnerCardHeader } = v2;

export const Card = styled(wrapper([v1.Card, v2.Card]))``;
export const CardHeader = styled(wrapper([v1.CardHeader, v2.CardHeader]))``;
export const CardContent = styled(wrapper([v1.CardContent, v2.CardContent]))``;
export const CardFooter = styled(wrapper([v1.CardFooter, v2.CardFooter]))``;
