<?php get_header(); ?>
<section id="content" role="main">
	<div class="container">
		<div class="left-area">
			<?php query_posts( 'posts_per_page=5' ); ?>
			<?php if ( have_posts() ) : while ( have_posts() ) : the_post(); ?>
				<article id="post-<?php the_ID(); ?>" <?php post_class(); ?>>
					<div class="date">
						<div class="month"><?php the_time('M'); ?></div>
						<div class="day"><?php the_time('d'); ?></div>
					</div>
					<div class="content">
						<div class="featured-image">
						<?php if ( has_post_thumbnail() ) { ?>
						<a href="<?php the_permalink(); ?>"><?php the_post_thumbnail( 'blog-featured-image' ); ?></a>
						<?php } ?>
						</div>
						<h1 class="entry-title"><a href="<?php the_permalink(); ?>"><?php the_title(); ?></a></h1>
						<div class="excerpt"><?php the_excerpt(); ?></div>
						<div class="entry-meta">
							<span class="date"><?php the_time('F d, Y'); ?></span>
							<span class="author"><?php the_author(); ?></span>
							<span class="comments"><?php comments_popup_link('No comments', '1 comment', '% comments'); ?></span>
							<span class="category"><?php echo get_the_category_list(", "); ?></span>
							
						</div>
					</div>
					<div class="clear"></div>
				</article>
			<?php endwhile; endif; ?>
		</div> <!-- END LEFT AREA -->
		<div class="right-area">
			<div class="sidebar">
				<?php dynamic_sidebar( 'primary-widget-area' ); ?>
			</div>
		</div> <!-- END RIGHT AREA -->
		<div class="clear"></div>
	</div>
</section>
<?php get_footer(); ?>