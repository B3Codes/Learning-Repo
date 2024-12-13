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

