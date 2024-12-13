# import subprocess
# import json

# def extract_and_download_videos(input_file, download_directory):
#     """
#     Extracts and downloads videos from URLs using yt-dlp.

#     Args:
#     - input_file: Path to the JSON file containing video page URLs.
#     - download_directory: Directory where videos will be saved.

#     Returns:
#     - None
#     """
#     # Load video URLs from the input JSON file
#     with open(input_file, 'r') as f:
#         video_urls = json.load(f)

#     for video_url in video_urls:
#         try:
#             print(f"Processing: {video_url}")
            
#             # Extract the direct video file URL using yt-dlp
#             command_extract = f'python -m yt_dlp --get-url "{video_url}"'
#             result = subprocess.check_output(command_extract, shell=True, text=True).strip()
#             print(f"Extracted URL: {result}")
            
#             # Download the video using yt-dlp
#             command_download = f'python -m yt_dlp -o "{download_directory}/%(title)s.%(ext)s" "{video_url}"'
#             subprocess.run(command_download, shell=True, check=True)
#             print(f"Downloaded video: {video_url}")
#         except subprocess.CalledProcessError as e:
#             print(f"Error processing {video_url}: {e}")

# # Define input and output paths
# input_file = "p2_test.json"  # Input file with video URLs
# download_directory = "downloaded_videos"  # Directory to save downloaded videos

# # Run the downloader
# extract_and_download_videos(input_file, download_directory)


import requests
from bs4 import BeautifulSoup
import json
from datetime import datetime
import subprocess
import os

def scrape_meeting_data(base_urls, start_date, end_date, output_file):
    """
    Scrapes meeting data from given base URLs within a date range and saves to a file.

    Args:
    - base_urls: List of URLs to scrape from.
    - start_date: Start date (YYYY-MM-DD) as a string.
    - end_date: End date (YYYY-MM-DD) as a string.
    - output_file: Path to save the scraped meeting data as a JSON file.

    Returns:
    - List of dictionaries containing meeting metadata.
    """
    meeting_data = []
    start_date_obj = datetime.strptime(start_date, '%Y-%m-%d')
    end_date_obj = datetime.strptime(end_date, '%Y-%m-%d')

    for base_url in base_urls:
        print(f"Scraping data from: {base_url}")
        try:
            response = requests.get(base_url)
            if response.status_code != 200:
                print(f"Failed to fetch data from {base_url}")
                continue

            soup = BeautifulSoup(response.content, 'html.parser')
            medias = []

            # Placeholder scraping logic: Customize based on site structure
            for link in soup.find_all('a', href=True):
                url = link['href']
                title = link.text.strip()
                # Replace with actual date parsing logic if available
                date = datetime.now().strftime('%Y-%m-%d')  # Placeholder: today's date

                # Filter by date range
                try:
                    media_date = datetime.strptime(date, '%Y-%m-%d')  # Adjust parsing logic
                    if start_date_obj <= media_date <= end_date_obj:
                        medias.append({
                            "url": url,
                            "title": title,
                            "date": date,
                            "source_type": "video"  # Assuming all links are videos
                        })
                except ValueError:
                    continue  # Skip invalid dates

            if medias:
                meeting_data.append({
                    "base_url": base_url,
                    "medias": medias
                })
        except Exception as e:
            print(f"Error scraping {base_url}: {e}")

    # Save meeting data to JSON file
    with open(output_file, 'w') as f:
        json.dump(meeting_data, f, indent=4)
    print(f"Meeting data saved to {output_file}.")

    return meeting_data


def download_videos(meeting_data, download_directory):
    """
    Extracts and downloads videos using yt-dlp.

    Args:
    - meeting_data: List of meeting metadata (output from scrape_meeting_data).
    - download_directory: Path to the directory where videos will be saved.

    Returns:
    - None
    """
    # Ensure the download directory exists
    if not os.path.exists(download_directory):
        os.makedirs(download_directory)

    for entry in meeting_data:
        for media in entry['medias']:
            video_url = media['url']
            try:
                print(f"Processing video URL: {video_url}")
                
                # Extract the direct video URL using yt-dlp
                command_extract = f'python -m yt_dlp --get-url "{video_url}"'
                result = subprocess.check_output(command_extract, shell=True, text=True).strip()
                print(f"Extracted URL: {result}")
                
                # Download the video using yt-dlp
                command_download = f'python -m yt_dlp -o "{download_directory}/%(title)s.%(ext)s" "{result}"'
                subprocess.run(command_download, shell=True, check=True)
                print(f"Downloaded video from: {result}")
            except subprocess.CalledProcessError as e:
                print(f"Error downloading {video_url}: {e}")


# Main execution
if __name__ == "__main__":
    # Load input for Problem 1
    input_file = "p1_test.json"
    with open(input_file, 'r') as f:
        input_data = json.load(f)

    start_date = input_data['start_date']
    end_date = input_data['end_date']
    base_urls = input_data['base_urls']

    # Output file for scraped meeting data
    scraped_data_file = "scraped_meetings.json"

    # Scrape meeting data (Problem 1)
    meeting_data = scrape_meeting_data(base_urls, start_date, end_date, scraped_data_file)
    print("Scraping complete. Meeting data extracted and saved.")

    # Download videos (Problem 2)
    download_directory = "downloaded_videos"
    download_videos(meeting_data, download_directory)
    print(f"All videos downloaded to the '{download_directory}' directory.")
