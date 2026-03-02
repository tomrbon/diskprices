---
title: "How Many TB Do You Need for a Media Server?"
description: "Planning storage capacity for your Plex, Jellyfin, or media server? Calculate exactly how many terabytes you need based on your content library size."
date: 2026-03-01
categories: ["guides", "storage"]
category: "guides"
image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&h=400&fit=crop"
tags: ["nas", "plex", "storage", "capacity"]
layout: article.njk
---

_Affiliate Disclosure: We earn commissions from qualifying purchases through links on this site at no extra cost to you._

## Introduction

Building a media server is exciting—you're creating your own personal Netflix with all your movies, TV shows, music, and photos in one place. But one question stumps almost everyone: **How much storage do I actually need?**

The answer isn't simple. Storage needs vary wildly depending on what content you're storing, what quality you prefer, and whether you're planning for future growth. Buy too little, and you'll be upgrading in months. Buy too much, and you've wasted money on capacity you won't use.

This guide will help you calculate your storage needs based on real-world file sizes, library types, and growth projections. By the end, you'll know exactly how many terabytes to buy—and whether to choose a 4-bay NAS, an 8-bay monster, or something in between.

---

## Understanding File Sizes by Content Type

<figure>
  <img src="https://images.unsplash.com/photo-1593359677879-a6a5f8a2c19c?w=800&h=400&fit=crop" alt="Various media storage types displayed" loading="lazy">
  <figcaption>Storage needs vary dramatically based on content quality</figcaption>
</figure>

Before calculating total capacity, you need to understand how much space different types of content consume. File sizes have grown dramatically as video quality has improved.

### Movie File Sizes by Quality

| Quality | Average Size | Size Range |
|---------|--------------|------------|
| SD (480p) | 700 MB - 1.5 GB | Compressed rips |
| HD (720p) | 2-4 GB | Web-DL, compressed |
| Full HD (1080p) | 8-15 GB | Standard Blu-ray quality |
| Full HD (1080p Remux) | 20-40 GB | Lossless Blu-ray |
| 4K UHD (compressed) | 15-30 GB | HEVC/H.265 |
| 4K UHD (Remux) | 50-100 GB | Lossless disc rip |
| 4K HDR with Atmos | 60-80 GB | High-quality encode |

**Example:** A collection of 100 movies at 1080p Blu-ray quality will need approximately 1-1.5 TB. The same 100 movies in 4K HDR remux quality could require 6-8 TB.

### TV Show File Sizes

| Quality | Per Episode | Per Season (10 eps) | Per Season (22 eps) |
|---------|-------------|---------------------|---------------------|
| SD (480p) | 350-500 MB | 3.5-5 GB | 7-11 GB |
| HD (720p) | 1-2 GB | 10-20 GB | 22-44 GB |
| Full HD (1080p) | 2-5 GB | 20-50 GB | 44-110 GB |
| 4K UHD | 8-15 GB | 80-150 GB | 176-330 GB |

**Example:** A complete series like *Friends* (236 episodes) at 1080p could require 500-800 GB. *Game of Thrones* (73 episodes) in 4K HDR might need 600 GB - 1 TB.

### Music File Sizes

| Format | Size per Album | Quality |
|--------|----------------|---------|
| MP3 320kbps | 100-150 MB | Lossy, good |
| AAC 256kbps | 80-120 MB | Lossy, excellent |
| FLAC | 300-500 MB | Lossless |
| ALAC | 300-500 MB | Lossless (Apple) |
| Hi-Res Audio | 1-3 GB | Lossless, high-res |

**Example:** A music library of 1,000 albums in FLAC format will need approximately 300-500 GB. MP3 would only need 100-150 GB.

### Photo Storage

| Quality | Size per Photo | Notes |
|---------|----------------|-------|
| JPEG (smartphone) | 2-5 MB | 12-48 MP |
| RAW (DSLR) | 20-50 MB | Uncompressed |
| RAW (mirrorless) | 30-80 MB | Modern sensors |
| TIFF/PSD (edited) | 50-200 MB | Working files |

**Example:** A photographer with 50,000 RAW photos could need 1.5-4 TB just for the original files.

---

## Calculating Your Storage Needs

### The Storage Formula

A practical approach is to estimate based on your viewing habits:

```
Total Storage = (Movies × MovieSize) + (Episodes × EpisodeSize) + (Albums × AlbumSize) + Buffer
```

**Buffer:** Always add 20-30% for growth and working space.

### Quick Estimation Tool

| Library Type | Small | Medium | Large | Enthusiast |
|--------------|-------|--------|-------|------------|
| Movies (1080p) | 50 movies = 500 GB | 200 movies = 2 TB | 500 movies = 5 TB | 1000+ movies = 10 TB+ |
| Movies (4K) | 50 movies = 2-3 TB | 200 movies = 8-12 TB | 500 movies = 20-30 TB | 1000+ movies = 40+ TB |
| TV (1080p) | 10 series = 500 GB | 50 series = 2-3 TB | 200 series = 8-10 TB | 500+ series = 20+ TB |
| TV (4K) | 10 series = 1 TB | 50 series = 5-8 TB | 200 series = 20-30 TB | 500+ series = 50+ TB |
| Music (FLAC) | 500 albums = 200 GB | 2000 albums = 800 GB | 5000 albums = 2 TB | 10000+ albums = 4+ TB |
| Photos (RAW) | 10,000 photos = 400 GB | 50,000 photos = 2 TB | 100,000 photos = 4 TB | 250,000+ = 10+ TB |

---

## Real-World Library Examples

### Example 1: Family Media Server

**Contents:**
- 100 family movies (1080p rips)
- 20 TV series complete (average 5 seasons each, 1080p)
- 500 music albums (MP3)
- 10,000 family photos (JPEG)

**Calculation:**
- Movies: 100 × 10 GB = 1,000 GB
- TV: 20 × 100 GB = 2,000 GB
- Music: 500 × 0.1 GB = 50 GB
- Photos: 10,000 × 0.003 GB = 30 GB
- Subtotal: ~3,080 GB (3 TB)
- 20% buffer: 3.6 TB

**Recommendation:** 8 TB drive (allows for growth to 5 TB+ of content)

### Example 2: Movie Enthusiast

**Contents:**
- 500 movies (mix of 1080p and 4K)
- 30 TV series (1080p)
- Minimal music and photos

**Calculation:**
- Movies: 250 × 12 GB + 250 × 60 GB = 18 TB
- TV: 30 × 150 GB = 4.5 TB
- Subtotal: ~22.5 TB
- 20% buffer: 27 TB

**Recommendation:** 32-40 TB NAS (4 × 10TB or 4 × 12TB drives)

### Example 3: 4K Collector

**Contents:**
- 300 movies (all 4K HDR remux)
- 50 TV series (4K where available, 1080p otherwise)
- 2000 albums (FLAC)

**Calculation:**
- Movies: 300 × 70 GB = 21 TB
- TV: 50 × 200 GB = 10 TB
- Music: 2000 × 0.4 GB = 800 GB
- Subtotal: ~32 TB
- 20% buffer: 38 TB

**Recommendation:** 48-60 TB NAS (6-8 × 10-12TB drives in RAID)

---

## Planning for Growth

### The One-Year Rule

A good rule of thumb: **Size your storage for at least one year of growth.**

| Growth Rate | Starting Library | One Year Later | Two Years | Recommendation |
|-------------|-----------------|----------------|-----------|----------------|
| Slow (casual) | 2 TB | 3 TB | 4 TB | Start with 4 TB, upgrade later |
| Moderate | 5 TB | 8 TB | 12 TB | Start with 12 TB |
| Aggressive | 10 TB | 18 TB | 28 TB | Start with 24-32 TB |

### Content Growth Rates

- **Casual collectors:** Add 2-5 movies/month, 1-2 TV series/month
- **Active collectors:** Add 10-20 movies/month, 5-10 TV series/month
- **Archivists:** Add 50+ movies/month, full series runs regularly

### Quality Creep

Many users start with 1080p content and later upgrade to 4K. Plan for at least a 4x storage increase if you might transition to 4K in the future.

---

## RAID and Redundancy Considerations

### Understanding RAID Capacity

RAID protects against drive failure but reduces usable capacity:

| RAID Level | Drives | Usable Capacity | Fault Tolerance |
|------------|--------|-----------------|-----------------|
| RAID 0 | 2 | 100% | None (data loss if any drive fails) |
| RAID 1 | 2 | 50% | 1 drive |
| RAID 5 | 3+ | (n-1)/n | 1 drive |
| RAID 6 | 4+ | (n-2)/n | 2 drives |
| RAID 10 | 4+ | 50% | 1 drive per mirror pair |

### NAS Capacity Examples

| NAS Configuration | Raw Capacity | RAID 5 Usable | RAID 6 Usable |
|-------------------|--------------|----------------|---------------|
| 4 × 4 TB | 16 TB | 12 TB | 8 TB |
| 4 × 8 TB | 32 TB | 24 TB | 16 TB |
| 4 × 12 TB | 48 TB | 36 TB | 24 TB |
| 6 × 8 TB | 48 TB | 40 TB | 32 TB |
| 8 × 10 TB | 80 TB | 70 TB | 60 TB |

---

## Storage Recommendations by Library Size

### 4 TB or Less (Entry Level)

**Best for:**
- Small movie collection (< 50 movies)
- A few TV series
- Family photos and music
- Starting out with media servers

**Hardware suggestions:**
- Single 8 TB external drive
- 2-bay NAS with 2 × 4 TB drives (RAID 1 = 4 TB usable)

### 4-10 TB (Moderate)

**Best for:**
- 100-300 movies
- 20-50 TV series
- Growing music library
- Most home users

**Hardware suggestions:**
- 4-bay NAS with 4 × 4 TB drives (RAID 5 = 12 TB usable)
- 2-bay NAS with 2 × 8 TB drives (RAID 1 = 8 TB usable)

### 10-30 TB (Large)

**Best for:**
- 300-800 movies
- 50-200 TV series
- Some 4K content
- Enthusiast collectors

**Hardware suggestions:**
- 4-bay NAS with 4 × 10 TB drives (RAID 5 = 30 TB usable)
- 5-bay NAS with 5 × 8 TB drives (RAID 5 = 32 TB usable)

### 30+ TB (Enthusiast/Archive)

**Best for:**
- 1000+ movies
- Extensive 4K collection
- Complete TV series archives
- Professional use

**Hardware suggestions:**
- 6-8 bay NAS with 10-14 TB drives
- Custom server with 10+ drive bays
- Consider used enterprise drives for cost efficiency

---

## When to Choose HDD vs SSD vs NVMe

<figure>
  <table>
    <thead>
      <tr>
        <th>Storage Type</th>
        <th>Cost per TB</th>
        <th>Best Use Case</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>NVMe SSD</td>
        <td>$60-100</td>
        <td>OS, apps, active projects</td>
      </tr>
      <tr>
        <td>SATA SSD</td>
        <td>$40-70</td>
        <td>Games, frequently accessed files</td>
      </tr>
      <tr>
        <td>HDD (CMR)</td>
        <td>$12-20</td>
        <td>Bulk media storage, NAS</td>
      </tr>
      <tr>
        <td>HDD (SMR)</td>
        <td>$10-15</td>
        <td>Cold archive, write-once</td>
      </tr>
    </tbody>
  </table>
  <figcaption>Storage economics in 2026</figcaption>
</figure>

For media servers, HDD remains the only practical choice for bulk storage. Use SSD/NVMe only for:
- Operating system and applications
- Active transcoding scratch space
- Frequently accessed metadata databases

---

## Frequently Asked Questions

### Should I buy one large drive or multiple smaller drives?

Multiple smaller drives with RAID offer better protection against data loss. A single 20 TB drive failure means losing everything. Four 6 TB drives in RAID 5 survive any single drive failure.

### How much overhead does a media server need?

Plan for 10-20% overhead for:
- Working space during file operations
- Temporary transcoding files
- Database and metadata storage
- Future growth without immediate upgrades

### Can I start small and expand later?

Yes, but consider the NAS cost. Buying a 2-bay NAS now and upgrading to a 4-bay later means buying two NAS units. If you anticipate growth, buy the larger NAS upfront and populate with fewer drives initially.

### What about cloud storage for media?

Cloud storage costs $5-10 per TB per month. For libraries over 10 TB, local storage is far more economical over time. Cloud makes sense for:
- Off-site backup copies
- Content shared with family remotely
- Content you rarely access

---

## Conclusion

Calculating media server storage isn't guesswork—it's math based on your content quality preferences and growth expectations.

**Quick guidelines:**
- **Small libraries (< 100 movies, 1080p):** 4-8 TB
- **Medium libraries (200-500 movies, mix):** 12-20 TB
- **Large libraries (500-1000 movies, some 4K):** 24-40 TB
- **Enthusiast archives (1000+ movies, heavy 4K):** 50+ TB

Always buy more storage than you currently need. Content libraries tend to grow faster than expected, and upgrading storage mid-stream is more expensive than buying capacity upfront.

Factor in RAID overhead, plan for at least one year of growth, and remember: storage is cheap, but losing your media library isn't. Always maintain backups separate from your primary media server.

---

## Recommended Storage Solutions

<div class="affiliate-box">
  <div class="affiliate-box-content">
    <div class="affiliate-box-title">Synology DS923+ 4-Bay NAS</div>
    <div class="affiliate-box-description">Perfect for home media servers, supports up to 4 drives, excellent software</div>
  </div>
  <a href="https://amazon.com/dp/B0BP9B8XC1?tag=diskprices-20" target="_blank" rel="nofollow sponsored noopener" class="affiliate-box-link">
    Check Price
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="7" y1="17" x2="17" y2="7"></line><polyline points="7 7 17 7 17 17"></polyline></svg>
  </a>
</div>