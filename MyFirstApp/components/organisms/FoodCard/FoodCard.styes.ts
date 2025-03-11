import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    gap: 8,
    margin: 4,

    borderRadius: 16,
    boxShadow: 'rgba(28, 28, 28, 0.12) 0px 4px 18px 0px',
  },
  image: {
    aspectRatio: 1.8,
    width: '100%',

    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    objectFit: 'cover',
  },
  details: {
    display: 'flex',
    gap: 6,
    paddingHorizontal: 12,
    paddingBottom: 12,
  },
  row: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  left: {
    maxWidth: 250,
  },

  right: {},

  rating: {
    backgroundColor: 'rgb(58, 183, 87)',
    paddingHorizontal: 8,
    borderRadius: 4,

    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 4,
    alignItems: 'center',
  },

  ratingText: {
    textAlign: 'right',
    color: '#fff',
    fontWeight: 600,
    fontSize: 14,
  },
  ratingIcon: {
    width: 10,
    aspectRatio: 1,
  },
  name: {
    fontSize: 16,
    fontWeight: 500,
    color: 'rgb(28, 28, 28)',

    maxWidth: 200,
  },
  category: {
    fontSize: 12,
    fontWeight: 500,
    color: 'rgb(105, 105, 105)',
  },
  price: {
    fontSize: 12,
    fontWeight: 500,
    color: 'rgb(105, 105, 105)',
  },
  time: {
    fontSize: 12,
    fontWeight: 500,
    color: 'rgb(28, 28, 28)',
    marginTop: 8,
  },
});
