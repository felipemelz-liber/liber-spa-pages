import React from 'react';
import PropTypes from 'prop-types';
import { GridContainer, Grid, Tag, PlusText } from './TagsDisplay.styles';

const hasTags = tagsArray => tagsArray.length > 0;

const TagsDisplay = ({ tags, tagsPerLine, tagsThreshold }) => {
  let extraTags = [];
  let displayTags = tags;
  const columnSize = 12 / tagsPerLine;

  if (tags.length > tagsThreshold) {
    displayTags = tags.slice(0, tagsThreshold - 1);
    extraTags = tags.slice(tagsThreshold - 1);
  }
  return (
    <GridContainer spacing={2}>
      {hasTags(displayTags)
        ? displayTags.map(invoiceNumber => (
            <Grid key={invoiceNumber} columnSize={columnSize}>
              <Tag>{invoiceNumber}</Tag>
            </Grid>
          ))
        : null}
      {hasTags(extraTags) ? (
        <Grid columnSize={columnSize}>
          <PlusText>{`+ ${extraTags.length}`}</PlusText>
        </Grid>
      ) : null}
    </GridContainer>
  );
};

TagsDisplay.propTypes = {
  tags: PropTypes.arrayOf(PropTypes.string.isRequired),
  tagsThreshold: PropTypes.number.isRequired,
  tagsPerLine: PropTypes.number.isRequired,
};

TagsDisplay.defaultProps = {
  tags: [],
};

export default TagsDisplay;
