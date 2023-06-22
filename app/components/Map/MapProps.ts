export interface MapProps {
  latitude: number | undefined;
  longitude: number | undefined;
}

type MapChild = React.ReactElement<{ map?: any }>;

export interface MapRenderProps {
  latitude: number | undefined;
  longitude: number | undefined;
  children: MapChild | MapChild[];
}
