// Definicja kształtu.
// To jest nasza "obudowa" oraz "przyciski".
interface TVRemote {
  volume: number;
  volumeUp(): void;
  volumeDown(): void;
  channel: number;
  channelUp(): void;
  channelDown(): void;
}

class AppleTVRemote implements TVRemote {
  // Implementacja tutaj.
  // Tu jest to, czego nie widzi użytkownik pilota.
}

class GoogleTVRemote implements TVRemote {
  // Implementacja tutaj.
  // Tu jest to, czego nie widzi użytkownik pilota.
}
