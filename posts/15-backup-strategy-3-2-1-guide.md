---
title: "How to Back Up Your Data: The Complete 3-2-1 Backup Guide"
description: "A practical guide to protecting your data with the 3-2-1 backup strategy. Learn what to back up, where to store it, and how to automate the process."
date: 2026-03-02
categories: ["tutorials", "backup"]
category: "tutorials"
image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&h=400&fit=crop"
tags: ["backup", "storage", "data-protection", "tutorial"]
layout: article.njk
---

_Affiliate Disclosure: We earn commissions from qualifying purchases through links on this site at no extra cost to you._

## Introduction

Data loss isn't a question of if—it's a question of when. Hard drives fail. Devices get stolen. Ransomware encrypts files. Accidental deletions happen. Without backups, that data is gone forever.

The 3-2-1 backup strategy is the gold standard for data protection. It's simple, effective, and has saved countless people from devastating loss. This guide explains exactly how to implement it for your situation, whether you're protecting family photos or business documents.

---

## The 3-2-1 Backup Rule Explained

<figure>
  <img src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800&h=400&fit=crop" alt="Multiple backup drives showing the importance of redundancy" loading="lazy">
  <figcaption>Three copies, two media types, one offsite—the foundation of data protection</figcaption>
</figure>

### The Three Rules

| Rule | Meaning | Example |
|------|---------|---------|
| **3** copies | Original data + 2 backup copies | Laptop + external drive + cloud |
| **2** different media | Store on different device types | Hard drive + cloud storage |
| **1** offsite | Keep one copy in a different location | Cloud backup or drive at family's house |

### Why This Works

- **3 copies:** One backup can fail. Two is redundancy.
- **2 media:** If one type has a systematic issue, the other survives.
- **1 offsite:** Fire, flood, or theft won't destroy everything.

---

## What Should You Back Up?

### Essential Data (Must Back Up)

| Category | Examples | Size Estimate |
|----------|----------|---------------|
| Documents | Tax returns, contracts, certificates | 1-10 GB |
| Photos | Family photos, screenshots | 50-500 GB |
| Videos | Home movies, recorded events | 100 GB - 2 TB |
| Projects | Work files, creative work | 10-100 GB |
| Passwords | Password manager vault | < 1 GB |
| Application Data | Browser bookmarks, email | 1-10 GB |

### Nice to Have (Back Up If Possible)

| Category | Examples | Size Estimate |
|----------|----------|---------------|
| Music | iTunes library, MP3s | 50-200 GB |
| Games | Steam library, game saves | 500 GB - 2 TB |
| Software | Installers, licenses | 10-50 GB |
| VM Images | Virtual machines | 50-500 GB each |

### What NOT to Back Up

- Operating system (reinstallable)
- Applications (re-downloadable)
- Temporary files, cache
- Easily replaceable media (streaming services)

---

## Local Backup Options

### External Hard Drives

The simplest and most affordable backup solution:

**Pros:**
- Low cost per TB ($15-25/TB)
- Fast backup and restore
- No internet required
- One-time purchase

**Cons:**
- Not offsite (unless rotated)
- Can fail
- Requires manual connection

**Best External Drives for Backup:**

| Drive | Capacity | Type | Price |
|-------|----------|------|-------|
| WD Elements Desktop | 8TB | HDD | $150 |
| Seagate Backup Plus Hub | 10TB | HDD | $180 |
| Samsung T7 Shield | 2TB | SSD | $140 |
| LaCie Rugged | 5TB | HDD | $130 |

### Network Attached Storage (NAS)

Centralized backup for multiple computers:

**Pros:**
- Automatic backups from all devices
- RAID protection
- Always connected

**Cons:**
- Higher upfront cost
- Not offsite by default
- Requires network setup

**Best NAS for Backup:**

| Model | Bays | Price | Best For |
|-------|------|-------|----------|
| Synology DS220+ | 2 | $300 | Home backup |
| Synology DS920+ | 4 | $550 | Power users |
| QNAP TS-453D | 4 | $500 | Budget 4-bay |

### Direct Attached Storage (DAS)

For high-speed local backup:

**Pros:**
- Faster than NAS
- Simple connection (USB/Thunderbolt)
- Good for large transfers

**Cons:**
- Single computer access
- Not networked

---

## Cloud Backup Services

### Backblaze Personal Backup

Unlimited backup for one computer:

**Features:**
- $9/month or $99/year
- Unlimited storage
- Automatic continuous backup
- External drive included
- 30-day version history

**Best for:** Single computer, set-and-forget backup

### Backblaze B2

Cloud storage for custom backup solutions:

**Features:**
- $0.005/GB/month ($5/TB)
- S3-compatible API
- No minimum storage period
- Free first 10GB

**Best for:** NAS backup, custom scripts, developers

### IDrive

Multi-device backup with more features:

**Features:**
- $79.50/year for 5TB
- Unlimited devices
- 30 version history
- Disk image backup
- Sync folder

**Best for:** Multiple computers, family backup

### Cloud Storage Comparison

| Service | Cost | Storage | Devices |
|---------|------|---------|---------|
| Backblaze Personal | $99/yr | Unlimited | 1 |
| IDrive | $80/yr | 5TB | Unlimited |
| Carbonite | $84/yr | Unlimited | 1 |
| Google One | $100/yr | 2TB | Unlimited |
| Dropbox | $120/yr | 2TB | 3 |

---

## Implementing 3-2-1: Step by Step

### Step 1: Assess Your Data

1. List all devices with data (computers, phones, tablets)
2. Identify critical data on each device
3. Estimate total storage needed
4. Note any special requirements (encryption, compliance)

### Step 2: Choose Your Backup Destinations

**For Home Users (under 2TB total):**

| Copy | Location | Method |
|------|----------|--------|
| Original | Computer | — |
| Copy 1 | External HDD | Time Machine / File History |
| Copy 2 | Cloud | Backblaze Personal |

**For Home Users (2-10TB):**

| Copy | Location | Method |
|------|----------|--------|
| Original | Computer / NAS | — |
| Copy 1 | External HDD | Manual or scheduled |
| Copy 2 | NAS | Automatic sync |
| Copy 3 | Cloud | Backblaze B2 |

**For Power Users (10TB+):**

| Copy | Location | Method |
|------|----------|--------|
| Original | NAS | — |
| Copy 1 | Second NAS (RAID) | Replication |
| Copy 2 | External HDD | Monthly rotation |
| Copy 3 | Cloud | B2 / Wasabi |

### Step 3: Set Up Local Backup

**Windows (File History):**

1. Connect external drive
2. Settings → Update & Security → Backup
3. Add a drive → Select your external
4. Configure advanced settings:
   - Save copies: Every hour
   - Keep saved versions: Forever (or 1 year)
   - Choose folders to back up

**macOS (Time Machine):**

1. Connect external drive
2. System Preferences → Time Machine
3. Select backup disk
4. Options → Exclude unnecessary folders
5. Enable "Back Up Automatically"

**Linux (rsync):**

```bash
# Simple backup script
rsync -av --delete /home/user/ /mnt/backup/

# Automated with cron (daily at 2 AM)
crontab -e
0 2 * * * rsync -av --delete /home/user/ /mnt/backup/
```

### Step 4: Set Up Cloud Backup

**Backblaze Personal:**

1. Download from backblaze.com
2. Install and sign in
3. Configure:
   - Select drives to back up
   - Set schedule (continuous or scheduled)
   - Enable backup of external drives
4. Let initial backup complete (may take days)

**Restic + Backblaze B2 (Advanced):**

```bash
# Initialize repository
restic -r b2:your-bucket init

# Backup command
restic -r b2:your-bucket backup /home/user

# Automated with cron
0 3 * * * restic -r b2:your-bucket backup /home/user
```

### Step 5: Set Up Offsite Rotation (Optional)

If using physical media for offsite:

1. Buy 2+ external drives
2. Rotate weekly or monthly:
   - Drive A: At home, connected
   - Drive B: At office or family member's house
3. On rotation day:
   - Bring Drive B home
   - Run full backup
   - Take Drive A to offsite location

---

## Backup Software Recommendations

### Free Options

| Software | Platform | Best For |
|----------|----------|----------|
| Time Machine | macOS | Mac users |
| File History | Windows | Windows users |
| Déjà Dup | Linux | Simple Linux backup |
| Duplicati | All | Cloud backup, free |
| Veeam Agent Free | Windows | Full disk imaging |

### Paid Options

| Software | Platform | Cost | Best For |
|----------|----------|------|----------|
| Acronis True Image | All | $50/yr | Full disk backup + cloud |
| Carbon Copy Cloner | macOS | $40 | Bootable Mac backups |
| Backblaze Personal | All | $99/yr | Unlimited cloud backup |
| Veeam Agent | Windows | $30/yr | Business workstations |
| GoodSync | All | $30/yr | Sync + backup |

---

## Testing Your Backups

A backup you haven't tested is not a backup—it's a hope.

### What to Test

| Test | Frequency | How |
|------|-----------|-----|
| File restore | Monthly | Restore 5 random files |
| Full restore | Annually | Restore to new drive |
| Bootability | Annually | Boot from backup drive |
| Cloud access | Monthly | Download file from cloud |
| Offsite availability | Annually | Retrieve offsite drive |

### Testing Checklist

1. ☐ Can I restore a single file from last week?
2. ☐ Can I restore a single file from last month?
3. ☐ Can I restore my entire system to new hardware?
4. ☐ Can I access my cloud backup from another computer?
5. ☐ Is my offsite backup actually offsite?

---

## Backup Schedules

### Recommended Schedule by Data Type

| Data Type | Backup Frequency | Retention |
|-----------|------------------|-----------|
| Active documents | Hourly | 90 days |
| Photos | Daily | Forever |
| Projects | Daily | 1 year |
| System | Weekly | 3 months |
| Media library | Weekly | 3 versions |

### The 3-2-1 Automation Goal

Automate as much as possible:

- **Local backup:** Automatic (Time Machine, File History)
- **Cloud backup:** Automatic (Backblaze, continuous)
- **Offsite rotation:** Manual calendar reminder

---

## Common Backup Mistakes

### Mistake 1: Relying on a Single Backup

One backup is a single point of failure. A corrupted backup is useless.

**Solution:** Always have at least 2 backup copies.

### Mistake 2: Not Testing Restores

You'll discover your backup doesn't work when you need it most.

**Solution:** Test restore monthly.

### Mistake 3: Backing Up to the Same Location

A drive connected to your computer isn't offsite. A NAS in the same building isn't offsite.

**Solution:** Use cloud backup or physically move drives.

### Mistake 4: Ignoring Encryption

If someone steals your backup drive, they have your data.

**Solution:** Encrypt backups with a strong password.

### Mistake 5: Infinite Version History

Keeping every version forever fills storage quickly.

**Solution:** Set reasonable retention (90 days for documents, 1 year for projects).

---

## Special Backup Scenarios

### Photos and Videos

**Recommended setup:**
1. Primary: Computer or NAS
2. Local backup: External HDD
3. Cloud: Google Photos (unlimited for "High Quality") or Amazon Photos (Prime members)
4. Offsite: Hard drive at family's house

**Photo-specific tools:**
- Lightroom: Built-in backup catalog
- Google Photos: Auto-upload from phone
- Amazon Photos: Unlimited for Prime members

### Mobile Devices

**iOS:**
- iCloud Backup: $3/month for 200GB
- Local: iTunes/Finder backup to computer
- Photos: Google Photos app

**Android:**
- Google One: $2/month for 100GB
- Local: Synology Photos, Nextcloud
- Photos: Google Photos

### Gaming PCs

**What to back up:**
- Game saves (not the games themselves)
- Screenshots and recordings
- Mods and configurations

**Steam:**
- Steam Cloud backs up most saves
- Manually back up non-Steam game saves

---

## Backup Cost Calculator

### Scenario: Home User with 2TB of Data

| Solution | Year 1 Cost | Ongoing Cost |
|----------|-------------|--------------|
| External HDD only | $100 | $0 |
| HDD + Backblaze | $200 | $100/year |
| HDD + cloud (B2) | $170 | $120/year |
| NAS + cloud | $450 | $120/year |

### Scenario: Power User with 10TB of Data

| Solution | Year 1 Cost | Ongoing Cost |
|----------|-------------|--------------|
| 2 x 10TB HDD | $400 | $0 |
| NAS + HDD + B2 | $800 | $600/year |
| NAS + offsite rotation | $700 | $0 |

---

## Conclusion

The 3-2-1 backup strategy isn't complicated, but it does require action. Start today:

1. **Buy an external hard drive** and set up automatic backup
2. **Sign up for cloud backup** (Backblaze, IDrive, or similar)
3. **Test a restore** to make sure it works

Your future self will thank you when—not if—you need those backups.

**Quick Start Checklist:**
- ☐ Identify all data that needs backup
- ☐ Calculate total storage needed
- ☐ Purchase external drive (2x your data size)
- ☐ Set up automatic local backup
- ☐ Sign up for cloud backup service
- ☐ Test restore of a file
- ☐ Document your backup plan

---

## Recommended Backup Drives

<div class="affiliate-box">
  <div class="affiliate-box-content">
    <div class="affiliate-box-title">WD Elements 8TB External Drive</div>
    <div class="affiliate-box-description">Affordable, reliable external HDD for local backup. Simple USB 3.0 connection, no external power needed for most uses.</div>
  </div>
  <a href="https://amazon.com/dp/B084XL7FQY?tag=diskprices-20" target="_blank" rel="nofollow sponsored noopener" class="affiliate-box-link">
    Check Price
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="7" y1="17" x2="17" y2="7"></line><polyline points="7 7 17 7 17 17"></polyline></svg>
  </a>
</div>