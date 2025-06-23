export interface VTTCueLike {
  startTime: number;
  endTime: number;
  text: string;
  onenter?: () => void;
  onexit?: () => void;
}

export interface MetadataCue {
  title: string;
  title_alt?: string;
  synopsis?: string;
  synopsis_alt?: string;
  keywords?: string;
  keywords_alt?: string;
  subjects?: string;
  subjects_alt?: string;
  gpspoints: {
    gps?: string;
    gps_zoom?: string;
    gps_text?: string;
    gps_text_alt?: string;
  };
  hyperlinks: {
    hyperlink?: string;
    hyperlink_text?: string;
    hyperlink_text_alt?: string;
  };
} 