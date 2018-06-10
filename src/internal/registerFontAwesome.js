import fontawesome from '@fortawesome/fontawesome';

import faEdit from '@fortawesome/fontawesome-free-solid/faEdit';
import faPlus from '@fortawesome/fontawesome-free-solid/faPlus';
import faStar from '@fortawesome/fontawesome-free-solid/faStar';

import farCalendarAlt from '@fortawesome/fontawesome-free-regular/faCalendarAlt';
import farCommentDots from '@fortawesome/fontawesome-free-regular/faCommentDots';
import farEdit from '@fortawesome/fontawesome-free-regular/faEdit';
import farFile from '@fortawesome/fontawesome-free-regular/faFile';
import farStar from '@fortawesome/fontawesome-free-regular/faStar';

const registerFontAwesome = () => {
  fontawesome.library.add(
    faEdit,
    faPlus,
    faStar,
    farCalendarAlt,
    farCommentDots,
    farEdit,
    farFile,
    farStar
  );
};

export default registerFontAwesome;
