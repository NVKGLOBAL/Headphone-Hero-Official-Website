export interface Album {
  title: string;
  artist?: string;
  year?: number;
  genre?: string;
  hyperfollowUrl: string;
  coverUrl: string;
  releaseDate?: string;
  upc?: string;
  tracklist?: string[];
}

export interface BlogPost {
  title: string;
  date: string;
  excerpt: string;
  imageUrl: string;
}

export type ProvenanceType =
  | "verified"
  | "owner-entered"
  | "imported"
  | "pending-verification"
  | "draft"
  | "fictional"
  | "unknown";

export type CanonStatus =
  | "verified"
  | "unverified"
  | "owner-designated canon"
  | "draft"
  | "archived";

export interface SourceRecord {
  sourceType:
    | "official-site"
    | "distribution"
    | "book"
    | "owner"
    | "database"
    | "external";
  sourceUrl?: string;
  verifiedAt?: string;
  verificationStatus: "verified" | "pending" | "rejected";
}

export interface IPAsset {
  id: string;
  name: string;
  type:
    | "artist"
    | "song"
    | "album"
    | "book"
    | "character"
    | "story"
    | "product"
    | "video"
    | "organization";
  description?: string;
  status: CanonStatus;
  provenance: ProvenanceType;
  source?: SourceRecord;
  public: boolean;
  metadata?: Record<string, unknown>;
}

export interface IPRelationship {
  id: string;
  fromAssetId: string;
  toAssetId: string;
  relationshipType: "related_to" | "soundtrack_for" | "inspired_by" | "chapter_reference";
  status: "verified" | "owner-approved" | "draft" | "unverified";
  source?: SourceRecord;
}

export interface StoryChapter {
  chapterNumber: number;
  title: string;
  summary: string;
  sourceText?: string;
}
